'use strict';

/** True when `href` points at the page currently being viewed. */
function isActive(currentPath, href) {
  if (typeof href !== 'string') return false;
  const base = href.split(/[?#]/)[0];
  if (!base || !base.startsWith('/')) return false;
  if (base === '/') return currentPath === '/';
  return currentPath === base || currentPath.startsWith(base + '/');
}

module.exports = { isActive };
