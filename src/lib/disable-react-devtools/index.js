/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */

import { isFunction, isObject } from './helpers';

function disableReactDevTools() {
  if (typeof window === 'undefined') {
    return;
  }
  // Ensure the React Developer Tools global hook exists
  if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
    return;
  }

  // Replace all global hook properties with a no-op function or a null value
  for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    if (prop) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
      )
        ? Function.prototype
        : null;
    }
  }
}

module.exports = { disableReactDevTools };
