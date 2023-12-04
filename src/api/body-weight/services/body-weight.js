'use strict';

/**
 * body-weight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::body-weight.body-weight');
