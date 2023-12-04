'use strict';

/**
 * pull-up router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pull-up.pull-up');
