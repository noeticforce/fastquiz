'use strict';

/**
 * taken service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::taken.taken');
