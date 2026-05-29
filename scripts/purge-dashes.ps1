# design-taste rule 9.G: zero em-dashes / en-dashes. Replace U+2014 and
# U+2013 with a plain hyphen across all source files (content + components).
$root = "D:\rahul\company\yuga\p4\src"
$files = Get-ChildItem -Path $root -Recurse -Include *.ts, *.tsx
$total = 0; $touched = 0
foreach ($f in $files) {
  $c = Get-Content -Raw -Encoding UTF8 $f.FullName
  if ($null -eq $c) { continue }
  $n = ([regex]::Matches($c, "[–—]")).Count
  if ($n -gt 0) {
    $c = $c -replace "[–—]", '-'
    Set-Content -Path $f.FullName -Value $c -Encoding UTF8 -NoNewline
    $total += $n; $touched++
    Write-Output ("  {0}: {1}" -f $f.Name, $n)
  }
}
Write-Output "files_touched=$touched dashes_replaced=$total"
