'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tvshows', [
      {
        name: 'Planet Earth II',
        genre: 'Documentary',
        episodes: 6,
        length: '00:51:00'
      },
      {
        name: 'Breaking Bad',
        genre: 'Crime, Drama, Thriller',
        episodes: 62,
        length: '00:49:00'
      },
      {
        name: 'Band of Brothers',
        genre: 'Drama, History, War',
        episodes: 10,
        length: '01:10:00'
      },
      {
        name: 'The Wire',
        genre: 'Crime, Drama, Thriller',
        episodes: 60,
        length: '00:59:00'
      },
      {
        name: 'Avatar: The Last Airbender',
        genre: 'Animation, Action, Adventure',
        episodes: 62,
        length: '00:23:00'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tvshows', null, {});
  }
};
