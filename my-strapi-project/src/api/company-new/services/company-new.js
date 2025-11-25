'use strict';

/**
 * company-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-new.company-new');
