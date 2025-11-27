'use strict';

/**
 * list-hotel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-hotel.list-hotel');
