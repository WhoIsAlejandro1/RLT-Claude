// Adds .is-scrolled to the top app bar once the page scrolls (M3 "on scroll" container color).
export function initAppBar() {
  const bar = document.getElementById('top-app-bar');
  const sentinel = document.querySelector('.rlt-scroll-sentinel');
  if (!bar || !sentinel || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    bar.classList.toggle('is-scrolled', !entry.isIntersecting);
  }, { threshold: 0 });
  observer.observe(sentinel);
}
