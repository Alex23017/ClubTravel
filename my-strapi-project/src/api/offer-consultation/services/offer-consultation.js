'use strict';

/**
 * offer-consultation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offer-consultation.offer-consultation');
