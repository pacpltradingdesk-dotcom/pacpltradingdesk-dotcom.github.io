# Downloads one unique image per slot. loremflickr (topic-related) with
# picsum fallback so every slot gets a non-empty unique real photo.
$dir = "D:\rahul\company\yuga\p4\public\assets\img"
$pairs = @(
  "home-hero:refinery", "v-pmc:oil", "v-soft:server", "v-cap:stockexchange",
  "p-eng:construction", "p-intel:technology", "p-cap:trading", "p-impact:solar",
  "bio-hero:straw", "bio-0:petroleum", "bio-1:farm", "bio-2:plastic", "bio-3:tyre",
  "ind-hero:factory", "prod-0:asphalt", "prod-1:highway", "prod-2:pavement", "prod-3:barrel", "prod-4:pipeline",
  "soft-hero:datacenter", "cap-hero:finance", "about-hero:skyline",
  "cs-hero:powerplant", "cs-0:industry", "cs-1:agriculture", "cs-2:recycling", "cs-3:forest",
  "mi-hero:economy", "contact-hero:harbor"
)
$ProgressPreference = 'SilentlyContinue'
$ok = 0; $fb = 0; $failed = @()
foreach ($p in $pairs) {
  $name, $tag = $p.Split(":")
  $file = Join-Path $dir "$name.jpg"
  if ((Test-Path $file) -and (Get-Item $file).Length -gt 8000 -and $name -ne "home-hero") { $ok++; continue }
  $got = $false
  foreach ($a in 1..3) {
    try {
      Invoke-WebRequest -Uri "https://loremflickr.com/1600/1000/$tag`?lock=$a" -OutFile $file -TimeoutSec 25 -ErrorAction Stop
      if ((Test-Path $file) -and (Get-Item $file).Length -gt 8000) { $got = $true; break }
    } catch {}
  }
  if ($got) { $ok++ }
  else {
    try { Invoke-WebRequest -Uri "https://picsum.photos/seed/$name/1600/1000" -OutFile $file -TimeoutSec 25 -ErrorAction Stop; $fb++ }
    catch { $failed += $name }
  }
}
Write-Output "loremflickr_ok=$ok  picsum_fallback=$fb  failed=$($failed.Count)  total=$($ok+$fb)/29"
if ($failed.Count) { Write-Output ("FAILED: " + ($failed -join ", ")) }
