'use strict';

/**
 * dumbbell-bench-press service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dumbbell-bench-press.dumbbell-bench-press');
