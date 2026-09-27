// Reveal Material Symbols ligatures only once the icon font is really available.
// document.fonts.check() is the wrong API here: it returns true when no matching @font-face exists.
export function initIconFontGuard() {
  if (!('fonts' in document)) return;
  const check = () =>
    document.fonts
      .load('24px "Material Symbols Outlined"')
      .then((faces) => document.documentElement.classList.toggle('md-icons-ready', faces.length > 0))
      .catch(() => {});
  check();
  document.fonts.addEventListener('loadingdone', check);
  window.addEventListener('load', check);
}
