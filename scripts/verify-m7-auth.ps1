$ErrorActionPreference = 'Stop'
Set-Location "d:\3 ULTRA\dhyanshiv-india"

$base = 'http://127.0.0.1:3000'
$results = @()

function Invoke-Check {
  param(
    [string]$Name,
    [string]$Method,
    [string]$Url,
    $Body = $null,
    [Microsoft.PowerShell.Commands.WebRequestSession]$Session = $null
  )

  $jsonBody = $null
  if ($null -ne $Body) { $jsonBody = ($Body | ConvertTo-Json -Depth 8) }

  try {
    if ($null -ne $Session) {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $Url -Method $Method -ContentType 'application/json' -Body $jsonBody -WebSession $Session
    } else {
      $resp = Invoke-WebRequest -UseBasicParsing -Uri $Url -Method $Method -ContentType 'application/json' -Body $jsonBody
    }
    $parsed = $null
    try { $parsed = $resp.Content | ConvertFrom-Json } catch { $parsed = $resp.Content }
    return [pscustomobject]@{ name=$Name; status=[int]$resp.StatusCode; ok=$true; body=$parsed }
  } catch {
    $r = $_.Exception.Response
    if ($null -eq $r) {
      return [pscustomobject]@{ name=$Name; status=-1; ok=$false; body=$_.Exception.Message }
    }
    $sr = New-Object IO.StreamReader($r.GetResponseStream())
    $raw = $sr.ReadToEnd()
    $parsed = $null
    try { $parsed = $raw | ConvertFrom-Json } catch { $parsed = $raw }
    return [pscustomobject]@{ name=$Name; status=[int]$r.StatusCode; ok=$false; body=$parsed }
  }
}

$fixture = @'
const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function hashPassword(password, salt = crypto.randomBytes(32).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex');
  return `${hash}:${salt}`;
}

(async () => {
  const agentPassword = hashPassword('Agent@123');
  const managerPassword = hashPassword('Manager@123');

  await prisma.user.upsert({
    where: { email: 'agent@dhyanshivindia.in' },
    update: { role: 'agent', isActive: true, password: agentPassword, userCode: 'AG1' },
    create: { email: 'agent@dhyanshivindia.in', role: 'agent', isActive: true, password: agentPassword, userCode: 'AG1', name: 'agent', emailVerified: new Date() }
  });

  await prisma.user.upsert({
    where: { email: 'manager@dhyanshivindia.in' },
    update: { role: 'manager', isActive: true, password: managerPassword, userCode: 'M1' },
    create: { email: 'manager@dhyanshivindia.in', role: 'manager', isActive: true, password: managerPassword, userCode: 'M1', name: 'manager', emailVerified: new Date() }
  });

  const admin = await prisma.user.findUnique({ where: { email: 'yash@dhyanshivindia.in' }, select: { id: true } });
  if (admin) {
    await prisma.trustedDevice.upsert({
      where: { deviceId: 'fixture-active-device' },
      update: {
        userId: admin.id,
        tokenHash: 'fixture-active-token-hash',
        deviceName: 'Fixture Active Device',
        ipAddress: '127.0.0.1',
        userAgent: 'copilot-test',
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        revokedAt: null,
      },
      create: {
        userId: admin.id,
        deviceId: 'fixture-active-device',
        tokenHash: 'fixture-active-token-hash',
        deviceName: 'Fixture Active Device',
        ipAddress: '127.0.0.1',
        userAgent: 'copilot-test',
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  }

  await prisma.emailOTP.upsert({
    where: { email: 'otp-check@example.com' },
    update: { otp: '123456', attempts: 0, expires: new Date(Date.now() + 10 * 60 * 1000) },
    create: { email: 'otp-check@example.com', otp: '123456', attempts: 0, expires: new Date(Date.now() + 10 * 60 * 1000) }
  });
  console.log('otp-fixture-ready');
  await prisma.$disconnect();
})();
'@
$null = $fixture | node

$results += Invoke-Check -Name 'legacy_admin_valid' -Method 'POST' -Url "$base/api/auth/admin-signin" -Body @{ email='yash@dhyanshivindia.in'; password='Udawn@6596' }
$results += Invoke-Check -Name 'legacy_admin_invalid' -Method 'POST' -Url "$base/api/auth/admin-signin" -Body @{ email='yash@dhyanshivindia.in'; password='wrong' }
$results += Invoke-Check -Name 'legacy_agent_valid' -Method 'POST' -Url "$base/api/auth/agent-signin" -Body @{ email='agent@dhyanshivindia.in'; password='Agent@123' }
$results += Invoke-Check -Name 'legacy_agent_invalid' -Method 'POST' -Url "$base/api/auth/agent-signin" -Body @{ email='agent@dhyanshivindia.in'; password='wrong' }
$results += Invoke-Check -Name 'v1_admin_valid' -Method 'POST' -Url "$base/api/v1/auth/admin/login" -Body @{ email='yash@dhyanshivindia.in'; password='Udawn@6596'; role='admin' }
$results += Invoke-Check -Name 'v1_admin_invalid' -Method 'POST' -Url "$base/api/v1/auth/admin/login" -Body @{ email='yash@dhyanshivindia.in'; password='wrong'; role='admin' }
$results += Invoke-Check -Name 'v1_agent_valid' -Method 'POST' -Url "$base/api/v1/auth/admin/login?role=agent" -Body @{ email='agent@dhyanshivindia.in'; password='Agent@123' }
$results += Invoke-Check -Name 'v1_manager_valid' -Method 'POST' -Url "$base/api/v1/auth/manager/login" -Body @{ email='manager@dhyanshivindia.in'; password='Manager@123' }
$results += Invoke-Check -Name 'v1_manager_invalid' -Method 'POST' -Url "$base/api/v1/auth/manager/login" -Body @{ email='manager@dhyanshivindia.in'; password='bad' }

$results += Invoke-Check -Name 'legacy_send_otp_invalid_email' -Method 'POST' -Url "$base/api/auth/send-otp" -Body @{ email='bad-email' }
$results += Invoke-Check -Name 'v1_send_otp_invalid_email' -Method 'POST' -Url "$base/api/v1/auth/challenge/email-otp/send" -Body @{ email='bad-email' }
$results += Invoke-Check -Name 'legacy_verify_otp_invalid' -Method 'POST' -Url "$base/api/auth/verify-otp" -Body @{ email='otp-check@example.com'; otp='000000' }
$results += Invoke-Check -Name 'v1_verify_otp_invalid' -Method 'POST' -Url "$base/api/v1/auth/challenge/email-otp/verify" -Body @{ email='otp-check@example.com'; otp='000000' }
$results += Invoke-Check -Name 'legacy_verify_otp_valid' -Method 'POST' -Url "$base/api/auth/verify-otp" -Body @{ email='otp-check@example.com'; otp='123456' }

$results += Invoke-Check -Name 'v1_totp_invalid' -Method 'POST' -Url "$base/api/v1/auth/challenge/totp/verify" -Body @{ totpSecret='JBSWY3DPEHPK3PXP'; code='000000' }
$totpPair = @'
const crypto = require('crypto');
const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
function encodeBase32(input) {
  let output = '';
  let bits = 0;
  let value = 0;
  for (let i = 0; i < input.length; i += 1) {
    value = (value << 8) | input[i];
    bits += 8;
    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
  return output;
}
function decodeBase32(secret) {
  const normalized = secret.toUpperCase().replace(/=+$/g, '').replace(/\s+/g, '');
  let bits = 0;
  let value = 0;
  const bytes = [];
  for (const ch of normalized) {
    const idx = BASE32_ALPHABET.indexOf(ch);
    if (idx === -1) throw new Error('Invalid base32 secret');
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
  const counterBuffer = Buffer.alloc(8);
  counterBuffer.writeUInt32BE(Math.floor(counter / 0x100000000), 0);
  counterBuffer.writeUInt32BE(counter >>> 0, 4);
  const digest = crypto.createHmac('sha1', secret).update(counterBuffer).digest();
  const offset = digest[digest.length - 1] & 0x0f;
  const code = ((digest[offset] & 0x7f) << 24) |
    ((digest[offset + 1] & 0xff) << 16) |
    ((digest[offset + 2] & 0xff) << 8) |
    (digest[offset + 3] & 0xff);
  return String(code % (10 ** digits)).padStart(digits, '0');
}
function totp(secretBase32, timestampMs = Date.now(), stepSeconds = 30, digits = 6) {
  const counter = Math.floor(timestampMs / 1000 / stepSeconds);
  return hotp(decodeBase32(secretBase32), counter, digits);
}
const secret = encodeBase32(crypto.randomBytes(20));
const code = totp(secret);
console.log(`${secret}|${code}`);
'@ | node
$line = ($totpPair | Select-Object -Last 1).Trim()
$parts = $line.Split('|')
$validSecret = $parts[0]
$validCode = $parts[1]
$results += Invoke-Check -Name 'v1_totp_valid' -Method 'POST' -Url "$base/api/v1/auth/challenge/totp/verify" -Body @{ totpSecret=$validSecret; code=$validCode }

$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$csrfResp = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/csrf" -WebSession $session
$csrf = $csrfResp.Content | ConvertFrom-Json
$form = @{ email='yash@dhyanshivindia.in'; password='Udawn@6596'; csrfToken=$csrf.csrfToken; callbackUrl="$base/dashboard"; json='true' }
$null = Invoke-WebRequest -UseBasicParsing -Uri "$base/api/auth/callback/credentials" -Method POST -Body $form -WebSession $session
$results += Invoke-Check -Name 'nextauth_session_after_signin' -Method 'GET' -Url "$base/api/auth/session" -Session $session
$results += Invoke-Check -Name 'v1_logout_all' -Method 'POST' -Url "$base/api/v1/auth/session/logout-all" -Session $session
$results += Invoke-Check -Name 'v1_trusted_list' -Method 'GET' -Url "$base/api/v1/auth/trusted-devices/list" -Session $session

$listResult = $results | Where-Object { $_.name -eq 'v1_trusted_list' } | Select-Object -Last 1
$deviceId = $null
if ($listResult -and $listResult.body -and $listResult.body.devices -and $listResult.body.devices.Count -gt 0) {
  $deviceId = $listResult.body.devices[0].id
}

if ($deviceId) {
  $results += Invoke-Check -Name 'v1_trusted_revoke' -Method 'POST' -Url "$base/api/v1/auth/trusted-devices/revoke" -Body @{ deviceId=$deviceId } -Session $session
} else {
  $results += [pscustomobject]@{ name='v1_trusted_revoke'; status=-1; ok=$false; body='No trusted devices available for revoke test' }
}

$results | ConvertTo-Json -Depth 10
