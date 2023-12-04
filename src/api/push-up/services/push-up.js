'use strict';

/**
 * push-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::push-up.push-up');
