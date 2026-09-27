'use strict';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate a submitted body against a field-spec array (see src/content/contact.js).
 * Returns { ok, values, errors, spam }. Passwords are never echoed back in `values`.
 */
function validateFields(fields, body) {
  const values = {};
  const errors = {};
  const source = body && typeof body === 'object' ? body : {};
  const spam = typeof source.website === 'string' && source.website.trim() !== '';

  for (const field of fields) {
    const raw = source[field.name];
    const first = Array.isArray(raw) ? raw[0] : raw;
    let value = first === undefined || first === null ? '' : String(first).trim();
    const max = field.max || 500;
    if (value.length > max) value = value.slice(0, max);

    if (field.type !== 'password') values[field.name] = value;

    const label = field.label || field.name;
    if (field.required && !value) {
      errors[field.name] = `${label} is required.`;
      continue;
    }
    if (!value) continue;
    if (field.type === 'email' && !EMAIL_RE.test(value)) {
      errors[field.name] = 'Enter a valid email address.';
    } else if (field.type === 'select' && Array.isArray(field.options) && !field.options.includes(value)) {
      errors[field.name] = 'Choose one of the listed options.';
    }
  }

  return { ok: Object.keys(errors).length === 0, values, errors, spam };
}

module.exports = { validateFields };
