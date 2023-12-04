'use strict';

/**
 * workout-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workout-list.workout-list');
