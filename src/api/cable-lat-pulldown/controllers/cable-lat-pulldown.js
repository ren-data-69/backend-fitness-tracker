'use strict';

/**
 * cable-lat-pulldown controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cable-lat-pulldown.cable-lat-pulldown');
