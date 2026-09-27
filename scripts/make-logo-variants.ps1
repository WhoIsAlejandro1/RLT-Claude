# Generates web-sized logo variants from the transparent master PNG using System.Drawing (no npm deps).
# Run: npm run logo   (or: powershell -NoProfile -ExecutionPolicy Bypass -File scripts/make-logo-variants.ps1)
param(
  [string]$Source = (Join-Path $PSScriptRoot "..\images\renewed_life_therapies_transparent.png"),
  [string]$OutDir = (Join-Path $PSScriptRoot "..\public\images")
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
if (-not (Test-Path $Source)) { throw "Source logo not found: $Source (drop the transparent PNG into images/)" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$OutDir = (Resolve-Path $OutDir).Path

function Render([int]$w, [int]$h, [string]$name, [System.Drawing.Color]$bg, [scriptblock]$draw) {
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  try {
    $g.Clear($bg)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    & $draw $g $w $h
  } finally { $g.Dispose() }
  $bmp.Save((Join-Path $OutDir $name), [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host ("wrote {0} ({1}x{2})" -f $name, $w, $h)
}

$img = [System.Drawing.Image]::FromFile((Resolve-Path $Source).Path)
try {
  $transparent = [System.Drawing.Color]::Transparent
  $unit = [System.Drawing.GraphicsUnit]::Pixel
  # Source regions in the 2500x2500 master. Tune here if the crop clips leaves or shows letter tops.
  $lockupSrc = [System.Drawing.Rectangle]::new(300, 330, 1900, 1730)   # whole logo, margins trimmed
  $markSrc   = [System.Drawing.Rectangle]::new(540, 320, 1350, 1300)   # wreath + flame only
  $flameSrc  = [System.Drawing.Rectangle]::new(960, 520, 500, 930)     # flame only (favicon)

  # Full lockup (footer, dark surfaces): 1024 and 512 wide, aspect preserved.
  foreach ($pair in @(@('logo-lockup.png', 1024), @('logo-lockup-512.png', 512))) {
    $w = [int]$pair[1]; $h = [int][math]::Round($w * $lockupSrc.Height / $lockupSrc.Width)
    Render $w $h $pair[0] $transparent { param($g, $cw, $ch) $g.DrawImage($img, [System.Drawing.Rectangle]::new(0, 0, $cw, $ch), $lockupSrc, $unit) }
  }
  # Square mark (header, hero watermark, favicon base).
  foreach ($pair in @(@('logo-mark-512.png', 512), @('logo-mark-160.png', 160), @('logo-mark-64.png', 64))) {
    $s = [int]$pair[1]
    Render $s $s $pair[0] $transparent {
      param($g, $cw, $ch)
      $dh = [int][math]::Round($cw * $markSrc.Height / $markSrc.Width)
      $g.DrawImage($img, [System.Drawing.Rectangle]::new(0, [int](($ch - $dh) / 2), $cw, $dh), $markSrc, $unit)
    }
  }
  # Favicons: flame on an olive disc.
  foreach ($pair in @(@('favicon-48.png', 48), @('favicon-32.png', 32))) {
    $s = [int]$pair[1]
    Render $s $s $pair[0] $transparent {
      param($g, $cw, $ch)
      $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 90, 99, 71))
      $g.FillEllipse($brush, 0, 0, $cw, $ch); $brush.Dispose()
      $fh = [int][math]::Round($ch * 0.72); $fw = [int][math]::Round($fh * $flameSrc.Width / $flameSrc.Height)
      $g.DrawImage($img, [System.Drawing.Rectangle]::new([int](($cw - $fw) / 2), [int](($ch - $fh) / 2), $fw, $fh), $flameSrc, $unit)
    }
  }
  # Apple touch icon: opaque cream background, mark at 80%.
  Render 180 180 'apple-touch-icon.png' ([System.Drawing.Color]::FromArgb(255, 251, 248, 241)) {
    param($g, $cw, $ch)
    $mw = [int][math]::Round($cw * 0.8); $mh = [int][math]::Round($mw * $markSrc.Height / $markSrc.Width)
    $g.DrawImage($img, [System.Drawing.Rectangle]::new([int](($cw - $mw) / 2), [int](($ch - $mh) / 2), $mw, $mh), $markSrc, $unit)
  }
} finally { $img.Dispose() }
