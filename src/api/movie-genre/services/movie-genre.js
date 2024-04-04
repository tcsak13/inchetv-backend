'use strict';

/**
 * movie-genre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-genre.movie-genre');
