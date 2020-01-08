/* eslint-env node, mocha, es6 */

'use strict';

import { MainClassApplication } from './core/core'

(function (global, factory) {

    'use strict'

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document ? factory(global, true) : (w) => {
			if (!w.document) {
				throw new Error('app requires a window with a document')
			}

			return factory(w)
		};
	// eslint-disable-next-line no-undef
	} else if (typeof define === 'function' && define.amd) {
		// eslint-disable-next-line no-undef
		define(() => factory(global))
	} else {
		factory(global)
	}
// eslint-disable-next-line no-unused-vars
})(typeof window !== 'undefined' ? window : this, function (window) {

    'use strict'

    try {

        MainClassApplication.setup()

    // eslint-disable-next-line no-empty
    } catch (e) {}

});