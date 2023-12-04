'use strict';

/**
 * pull-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pull-up.pull-up');
