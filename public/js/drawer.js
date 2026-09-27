// Modal navigation drawer on <dialog>: showModal() gives focus trapping, Escape and focus restore for free.
export function initDrawer() {
  const dialog = document.getElementById('nav-drawer');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const html = document.documentElement;
  const openers = Array.from(document.querySelectorAll('[data-drawer-open]'));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let closing = false;

  const setExpanded = (value) => openers.forEach((b) => b.setAttribute('aria-expanded', String(value)));

  function open() {
    if (dialog.open) return;
    closing = false;
    dialog.showModal();
    html.classList.add('is-drawer-open');
    setExpanded(true);
    // Two frames so the initial translateX(-100%) is painted before the transition starts.
    requestAnimationFrame(() => requestAnimationFrame(() => dialog.classList.add('is-open')));
  }

  function close() {
    if (!dialog.open || closing) return;
    closing = true;
    dialog.classList.remove('is-open');
    if (reduced.matches) {
      dialog.close();
      return;
    }
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      dialog.removeEventListener('transitionend', onEnd);
      dialog.close();
    };
    const onEnd = (e) => {
      if (e.target === dialog && e.propertyName === 'transform') finish();
    };
    dialog.addEventListener('transitionend', onEnd);
    setTimeout(finish, 400);
  }

  dialog.addEventListener('close', () => {
    closing = false;
    dialog.classList.remove('is-open');
    html.classList.remove('is-drawer-open');
    setExpanded(false);
  });

  openers.forEach((b) => b.addEventListener('click', open));
  dialog.querySelectorAll('[data-drawer-close]').forEach((b) => b.addEventListener('click', close));
  // Backdrop clicks target the dialog itself; the sheet fills it so inner clicks never do.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  // Escape: animate out instead of the instant native close.
  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  // Same-page anchor links would otherwise leave the drawer open.
  dialog.querySelectorAll('a[href*="#"]').forEach((a) => a.addEventListener('click', close));
  // Inline nav takes over at the expanded breakpoint.
  window.matchMedia('(min-width: 840px)').addEventListener('change', (e) => {
    if (e.matches && dialog.open) {
      dialog.classList.remove('is-open');
      dialog.close();
    }
  });
}
