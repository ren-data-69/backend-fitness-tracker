'use strict';

/**
 * cable-lat-pulldown service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cable-lat-pulldown.cable-lat-pulldown');
