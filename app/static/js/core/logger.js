/* eslint-env node, mocha, es6 */

/**
 * @module engine/core/logger
 */

'use strict';

/**
 *
 * @type {*[]}
 */
const levels = ['error', 'warn', 'log', 'info'];

/**
 *
 * @type {string}
 */
let level = 'warn';

/**
 *
 * @param method
 * @param args
 */
function debug(method, ...args) {
	if (levels.indexOf(method) <= levels.indexOf(level)) {
		console[method](...args);
	}
}

/**
 *
 * @param ns
 * @returns {{}}
 */
export function namespace(ns) {
	return levels.reduce((logger, method) => {
		logger[method] = debug.bind(console, method, ns);
		return logger;
	}, {});
}

namespace.level = newLevel => {
	level = newLevel;
};

debug.level = namespace.level;