'use strict';

/**
 * reset-pass service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reset-pass.reset-pass');
