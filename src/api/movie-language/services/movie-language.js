'use strict';

/**
 * movie-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-language.movie-language');
