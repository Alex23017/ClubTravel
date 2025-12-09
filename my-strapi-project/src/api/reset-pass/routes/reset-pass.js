'use strict';

/**
 * reset-pass router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reset-pass.reset-pass');
