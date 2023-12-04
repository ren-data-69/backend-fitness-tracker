'use strict';

/**
 * pull-up controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pull-up.pull-up');
