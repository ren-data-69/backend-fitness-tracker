'use strict';

/**
 * barbell-bench-press service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barbell-bench-press.barbell-bench-press');
