# Pull the curated Unsplash photos used in the Claude Design bundle and
# place them over the matching site slots (filenames unchanged -> no code edits).
$dir = "D:\rahul\company\yuga\p4\public\assets\img"
$base = "https://images.unsplash.com/photo-"
$q = "?q=80&w=1600&auto=format&fit=crop"
# slot-file  ->  unsplash photo id (topic-matched from the design)
$map = @{
  "about-hero"   = "1504384308090-c894fdcc538d"  # industrial / about
  "cs-hero"      = "1678984240126-70bcddd7a228"  # refinery (design's main industrial hero)
  "v-pmc"        = "1532996122724-e3c354a0b15b"  # plant / pyrolysis
  "cap-hero"     = "1767424412548-1a1ac7f4b9bc"  # capital markets
  "v-cap"        = "1554224155-6726b3ff858f"      # finance
  "mi-hero"      = "1551288049-bebda4e38f71"      # market heatmap / data
  "p-cap"        = "1605792657660-596af9009e82"  # indicators / screens
  "v-soft"       = "1460925895917-afdab827c52f"  # laptop / data dashboards
  "contact-hero" = "1473445730015-841f29a9490b"  # contact / logistics
  "bio-0"        = "1653352639753-8debcc830014"  # bitumen product plant
  "ind-hero"     = "1581092918056-0c4c3acd3789"  # reactor / industrial interior
  "p-eng"        = "1581092160562-40aa08e78837"  # engineering
  "prod-4"       = "1532187863486-abf9dbad1b69"  # quality lab / decanter
}
$ProgressPreference = 'SilentlyContinue'
$ok = 0; $fail = @()
foreach ($slot in $map.Keys) {
  $url = "$base$($map[$slot])$q"
  $file = Join-Path $dir "$slot.jpg"
  try {
    Invoke-WebRequest -Uri $url -OutFile $file -TimeoutSec 30 -ErrorAction Stop
    if ((Get-Item $file).Length -gt 8000) { $ok++ } else { $fail += $slot }
  } catch { $fail += $slot }
}
# copy the design's real logo too (available for later use)
$logo = "C:\Users\admin\.claude\projects\D--rahul-company-yuga-p4\da97e77c-8bee-4ad1-a4d0-89f1bda68def\tool-results\design_extract\ds\project\assets\yuga-logo.jpg"
if (Test-Path $logo) { Copy-Item $logo (Join-Path $dir "yuga-logo.jpg") -Force }
Write-Output "design_images_ok=$ok / $($map.Count)"
if ($fail.Count) { Write-Output ("FAILED: " + ($fail -join ", ")) }
