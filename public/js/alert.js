// Dismissible notices; strips ?notice= from the URL so a refresh does not repeat the banner.
export function initAlerts() {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-alert-dismiss]');
    if (!button) return;
    const alert = button.closest('.md-alert');
    if (alert) alert.remove();
  });

  if (/[?&]notice=/.test(window.location.search) && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.delete('notice');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
}
