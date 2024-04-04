'use strict';

/**
 * movie-country service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-country.movie-country');
