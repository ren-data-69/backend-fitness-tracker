'use strict';

/**
 * cable-lat-pulldown router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cable-lat-pulldown.cable-lat-pulldown');
