/* eslint-disable no-unused-vars */
/* eslint-env node, mocha, es6 */

/**
 * @module engine/core/MainClassApplication
 */

'use strict';

import { namespace } from './logger'

/**
 *
 * @type {{}}
 */
const debug = namespace('MainClassApplication')

/**
 * @class MainClassApplication
 *
 * {@link module:engine/core/logger~Logger `logger(namespace)`}
 */
export class MainClassApplication {

    constructor () {

        /**
		 *
		 * @private
		 *
		 * @type {string}
		 */
        this.version = '@VERSION'
    }

    /**
	 *
	 * @static
	 *
	 * {@link module:engine/core/logger~Logger `logger(namespace)`}
	 *
	 * @param {*} limit
	 */
	static debug(limit) {
		if (limit === true) {
			limit = 'log'
		}

		namespace.level(limit)
    }
    
    /**
	 *
	 * @static
	 */
    static setup () {
        return
    }
 
}