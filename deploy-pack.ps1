param(
  [switch]$IncludeNodeModules
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Push-Location $root

Write-Host 'Cleaning previous package artifacts...'
Remove-Item -LiteralPath 'dhyanshiv-india-deploy.zip' -ErrorAction SilentlyContinue
Remove-Item -LiteralPath 'out' -Recurse -Force -ErrorAction SilentlyContinue

Write-Host 'Building production app...'
npm run build

Write-Host 'Preparing exported static files...'
# If Next exported assets are under out\_next, duplicate to out\next so cPanel serves them from /next
if (Test-Path "$root\next\_next") {
  Write-Host 'Copying build _next to next/next inside export folder'
  if (Test-Path "$root\next\next") { Remove-Item -LiteralPath "$root\next\next" -Recurse -Force -ErrorAction SilentlyContinue }
  Copy-Item -Path "$root\next\_next" -Destination "$root\next\next" -Recurse -Force
}

# Replace any /next/_next/ references in HTML/text files with /next/ so assets resolve to the new folder
if (Test-Path "$root\next") {
  Write-Host 'Patching HTML references to use /next/ asset path'
  Get-ChildItem -Path "$root\next" -Recurse -File -Include *.html,*.txt,*.js | ForEach-Object {
    (Get-Content $_.FullName -Raw) -replace '/next/_next/', '/next/' | Set-Content $_.FullName -Force
  }
}

Write-Host 'Creating deploy package (zipping out/ contents)...'
# Zip contents of the 'next' export so extraction in public_html places files at site root
if (-Not (Test-Path "$root\next")) { throw 'Static export output folder next/ not found. Build may have failed.' }
Compress-Archive -Path "$root\next\*" -DestinationPath 'dhyanshiv-india-deploy.zip' -Force

Write-Host "Deploy package created: $(Join-Path $root 'dhyanshiv-india-deploy.zip')"
Pop-Location
