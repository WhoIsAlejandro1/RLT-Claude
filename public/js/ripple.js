// M3 ripple for any element carrying data-ripple (buttons, nav links, icon buttons).
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');

function spawn(host, x, y) {
  const rect = host.getBoundingClientRect();
  const size = 2 * Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));
  const el = document.createElement('span');
  el.className = 'md-ripple';
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.left = `${x - size / 2}px`;
  el.style.top = `${y - size / 2}px`;
  host.appendChild(el);

  let entered = false;
  let released = false;
  const remove = () => el.remove();
  const fadeOut = () => {
    el.classList.add('md-ripple--out');
    el.addEventListener('animationend', remove, { once: true });
    setTimeout(remove, 600);
  };
  el.addEventListener('animationend', (e) => {
    if (e.animationName !== 'md-ripple-in') return;
    entered = true;
    if (released) fadeOut();
  }, { once: true });

  const release = () => {
    if (released) return;
    released = true;
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => host.removeEventListener(t, release));
    if (entered) fadeOut();
  };
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => host.addEventListener(t, release));
  return release;
}

function hostFrom(target) {
  const host = target && target.closest ? target.closest('[data-ripple]') : null;
  if (!host || host.disabled || host.getAttribute('aria-disabled') === 'true') return null;
  return host;
}

export function initRipples() {
  document.addEventListener('pointerdown', (e) => {
    if (REDUCED.matches || e.button !== 0) return;
    const host = hostFrom(e.target);
    if (!host) return;
    const rect = host.getBoundingClientRect();
    spawn(host, e.clientX - rect.left, e.clientY - rect.top);
  });

  document.addEventListener('keydown', (e) => {
    if (REDUCED.matches || e.repeat || (e.key !== 'Enter' && e.key !== ' ')) return;
    const host = hostFrom(e.target);
    if (!host || host !== document.activeElement) return;
    const rect = host.getBoundingClientRect();
    const release = spawn(host, rect.width / 2, rect.height / 2);
    host.addEventListener('keyup', release, { once: true });
    setTimeout(release, 400);
  });
}
