$ErrorActionPreference = 'Stop'
Set-Location "d:\3 ULTRA\dhyanshiv-india"

$base = 'http://127.0.0.1:3000'
$results = @()

function Add-Result {
  param(
    [string]$name,
    [bool]$ok,
    [int]$status,
    [string]$detail
  )

  $script:results += [pscustomobject]@{
    name = $name
    ok = $ok
    status = $status
    detail = $detail
  }
}

function Check-Route {
  param(
    [string]$name,
    [string]$path,
    [int]$expectStatus
  )

  try {
    $resp = Invoke-WebRequest -UseBasicParsing -Uri "$base$path"
    Add-Result -name $name -ok ($resp.StatusCode -eq $expectStatus) -status ([int]$resp.StatusCode) -detail 'route-check'
  } catch {
    $resp = $_.Exception.Response
    $status = if ($resp) { [int]$resp.StatusCode } else { -1 }
    Add-Result -name $name -ok ($status -eq $expectStatus) -status $status -detail 'route-check'
  }
}

function Post-Json {
  param(
    [string]$name,
    [string]$url,
    [hashtable]$body,
    [int]$expectStatus,
    [Microsoft.PowerShell.Commands.WebRequestSession]$session = $null
  )

  try {
    if ($session) {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $url -Method POST -ContentType 'application/json' -Body ($body | ConvertTo-Json -Depth 10) -WebSession $session
    } else {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $url -Method POST -ContentType 'application/json' -Body ($body | ConvertTo-Json -Depth 10)
    }

    Add-Result -name $name -ok ($resp.StatusCode -eq $expectStatus) -status ([int]$resp.StatusCode) -detail $resp.Content
  } catch {
    $resp = $_.Exception.Response
    $status = if ($resp) { [int]$resp.StatusCode } else { -1 }
    $raw = ''
    if ($resp) {
      $sr = New-Object IO.StreamReader($resp.GetResponseStream())
      $raw = $sr.ReadToEnd()
    }
    Add-Result -name $name -ok ($status -eq $expectStatus) -status $status -detail $raw
  }
}

function Get-With-Session {
  param(
    [string]$name,
    [string]$url,
    [int]$expectStatus,
    [Microsoft.PowerShell.Commands.WebRequestSession]$session
  )

  try {
    $resp = Invoke-WebRequest -UseBasicParsing -Uri $url -WebSession $session
    Add-Result -name $name -ok ($resp.StatusCode -eq $expectStatus) -status ([int]$resp.StatusCode) -detail 'session-get'
  } catch {
    $resp = $_.Exception.Response
    $status = if ($resp) { [int]$resp.StatusCode } else { -1 }
    Add-Result -name $name -ok ($status -eq $expectStatus) -status $status -detail 'session-get'
  }
}

function Check-FinalPath {
  param(
    [string]$name,
    [string]$url,
    [string]$expectedPath,
    [Microsoft.PowerShell.Commands.WebRequestSession]$session = $null
  )

  try {
    if ($session) {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $url -WebSession $session
    } else {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $url
    }

    $finalPath = $resp.BaseResponse.ResponseUri.AbsolutePath
    Add-Result -name $name -ok ($finalPath -eq $expectedPath) -status ([int]$resp.StatusCode) -detail $finalPath
  } catch {
    $resp = $_.Exception.Response
    $status = if ($resp) { [int]$resp.StatusCode } else { -1 }
    Add-Result -name $name -ok $false -status $status -detail 'final-path-check-failed'
  }
}

# Broken route / route protection smoke
Check-Route -name 'route_home' -path '/' -expectStatus 200
Check-Route -name 'route_signin' -path '/signin' -expectStatus 200
Check-Route -name 'route_admin_signin' -path '/admin/signin' -expectStatus 200
Check-Route -name 'route_agent_signin' -path '/agent/signin' -expectStatus 200
Check-Route -name 'route_manager_signin' -path '/manager/signin' -expectStatus 200

# Legacy API compatibility + v1 API consistency
Post-Json -name 'legacy_admin_login_ok' -url "$base/api/auth/admin-signin" -body @{ email='yash@dhyanshivindia.in'; password='Udawn@6596' } -expectStatus 200
Post-Json -name 'legacy_admin_login_bad' -url "$base/api/auth/admin-signin" -body @{ email='yash@dhyanshivindia.in'; password='wrong' } -expectStatus 401
Post-Json -name 'legacy_agent_login_ok' -url "$base/api/auth/agent-signin" -body @{ email='agent@dhyanshivindia.in'; password='Agent@123' } -expectStatus 200
Post-Json -name 'legacy_agent_login_bad' -url "$base/api/auth/agent-signin" -body @{ email='agent@dhyanshivindia.in'; password='wrong' } -expectStatus 401

Post-Json -name 'v1_admin_login_ok' -url "$base/api/v1/auth/admin/login" -body @{ email='yash@dhyanshivindia.in'; password='Udawn@6596'; role='admin' } -expectStatus 200
Post-Json -name 'v1_admin_login_bad' -url "$base/api/v1/auth/admin/login" -body @{ email='yash@dhyanshivindia.in'; password='wrong'; role='admin' } -expectStatus 401
Post-Json -name 'v1_manager_login_ok' -url "$base/api/v1/auth/manager/login" -body @{ email='manager@dhyanshivindia.in'; password='Manager@123' } -expectStatus 200
Post-Json -name 'v1_manager_login_bad' -url "$base/api/v1/auth/manager/login" -body @{ email='manager@dhyanshivindia.in'; password='wrong' } -expectStatus 401

# OTP + TOTP
Post-Json -name 'legacy_send_otp_invalid_email' -url "$base/api/auth/send-otp" -body @{ email='bad-email' } -expectStatus 400
Post-Json -name 'v1_send_otp_invalid_email' -url "$base/api/v1/auth/challenge/email-otp/send" -body @{ email='bad-email' } -expectStatus 400

# Seed deterministic OTP for verify checks
$seed = @'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(async () => {
  await prisma.emailOTP.upsert({
    where: { email: 'otp-check@example.com' },
    update: { otp: '123456', attempts: 0, expires: new Date(Date.now() + 10 * 60 * 1000) },
    create: { email: 'otp-check@example.com', otp: '123456', attempts: 0, expires: new Date(Date.now() + 10 * 60 * 1000) }
  });
  await prisma.$disconnect();
})();
'@
$null = $seed | node

Post-Json -name 'legacy_verify_otp_bad' -url "$base/api/auth/verify-otp" -body @{ email='otp-check@example.com'; otp='000000' } -expectStatus 401
Post-Json -name 'v1_verify_otp_bad' -url "$base/api/v1/auth/challenge/email-otp/verify" -body @{ email='otp-check@example.com'; otp='000000' } -expectStatus 400
Post-Json -name 'legacy_verify_otp_ok' -url "$base/api/auth/verify-otp" -body @{ email='otp-check@example.com'; otp='123456' } -expectStatus 200

Post-Json -name 'v1_totp_bad' -url "$base/api/v1/auth/challenge/totp/verify" -body @{ totpSecret='JBSWY3DPEHPK3PXP'; code='000000' } -expectStatus 400

$totpPair = @'
const crypto = require('crypto');
const BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
function encodeBase32(input) {
  let out = '';
  let bits = 0;
  let value = 0;
  for (let i = 0; i < input.length; i += 1) {
    value = (value << 8) | input[i];
    bits += 8;
    while (bits >= 5) {
      out += BASE32[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += BASE32[(value << (5 - bits)) & 31];
  return out;
}
function decodeBase32(secret) {
  const n = secret.toUpperCase().replace(/=+$/g, '').replace(/\s+/g, '');
  let bits = 0, value = 0; const bytes = [];
  for (const ch of n) {
    const idx = BASE32.indexOf(ch);
    value = (value << 5) | idx;
    bits += 5;
    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return Buffer.from(bytes);
}
function hotp(secret, counter, digits = 6) {
  const cb = Buffer.alloc(8);
  cb.writeUInt32BE(Math.floor(counter / 0x100000000), 0);
  cb.writeUInt32BE(counter >>> 0, 4);
  const d = crypto.createHmac('sha1', secret).update(cb).digest();
  const o = d[d.length - 1] & 0x0f;
  const c = ((d[o] & 0x7f) << 24) | ((d[o+1] & 0xff) << 16) | ((d[o+2] & 0xff) << 8) | (d[o+3] & 0xff);
  return String(c % (10 ** digits)).padStart(digits, '0');
}
function totp(secret) {
  return hotp(decodeBase32(secret), Math.floor(Date.now()/1000/30), 6);
}
const secret = encodeBase32(crypto.randomBytes(20));
const code = totp(secret);
console.log(`${secret}|${code}`);
'@ | node
$line = ($totpPair | Select-Object -Last 1).Trim()
$parts = $line.Split('|')
Post-Json -name 'v1_totp_ok' -url "$base/api/v1/auth/challenge/totp/verify" -body @{ totpSecret=$parts[0]; code=$parts[1] } -expectStatus 200

# Session and protected flows (admin)
$adminSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$csrfAdminResp = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/csrf" -WebSession $adminSession
$csrfAdmin = $csrfAdminResp.Content | ConvertFrom-Json
$formAdmin = @{ email='yash@dhyanshivindia.in'; password='Udawn@6596'; csrfToken=$csrfAdmin.csrfToken; callbackUrl="$base/dashboard"; json='true' }
$null = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/callback/credentials" -Method POST -Body $formAdmin -WebSession $adminSession

Get-With-Session -name 'session_after_admin_login' -url "$base/api/auth/session" -expectStatus 200 -session $adminSession
Get-With-Session -name 'admin_dashboard_authenticated' -url "$base/admin/dashboard" -expectStatus 200 -session $adminSession
Get-With-Session -name 'settings_authenticated' -url "$base/settings" -expectStatus 200 -session $adminSession
Get-With-Session -name 'trusted_devices_list_authenticated' -url "$base/api/v1/auth/trusted-devices/list" -expectStatus 200 -session $adminSession
Post-Json -name 'logout_all_authenticated' -url "$base/api/v1/auth/session/logout-all" -body @{} -expectStatus 200 -session $adminSession

# RBAC checks via authenticated non-admin roles
$agentSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$csrfAgentResp = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/csrf" -WebSession $agentSession
$csrfAgent = $csrfAgentResp.Content | ConvertFrom-Json
$formAgent = @{ email='agent@dhyanshivindia.in'; password='Agent@123'; csrfToken=$csrfAgent.csrfToken; callbackUrl="$base/dashboard"; json='true' }
$null = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/callback/credentials" -Method POST -Body $formAgent -WebSession $agentSession

Check-FinalPath -name 'rbac_agent_cannot_admin_dashboard' -url "$base/admin/dashboard" -expectedPath '/signin' -session $agentSession

$managerSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$csrfManagerResp = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/csrf" -WebSession $managerSession
$csrfManager = $csrfManagerResp.Content | ConvertFrom-Json
$formManager = @{ email='manager@dhyanshivindia.in'; password='Manager@123'; csrfToken=$csrfManager.csrfToken; callbackUrl="$base/dashboard"; json='true' }
$null = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/callback/credentials" -Method POST -Body $formManager -WebSession $managerSession

Check-FinalPath -name 'rbac_manager_cannot_admin_dashboard' -url "$base/admin/dashboard" -expectedPath '/signin' -session $managerSession

# Unauthenticated route protection checks
Check-FinalPath -name 'unauth_admin_dashboard_protected' -url "$base/admin/dashboard" -expectedPath '/admin/signin'

Check-FinalPath -name 'unauth_agent_dashboard_protected' -url "$base/agent/dashboard" -expectedPath '/agent/signin'

Check-FinalPath -name 'unauth_settings_protected' -url "$base/settings" -expectedPath '/signin'

$results | ConvertTo-Json -Depth 6
