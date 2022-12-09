'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movie', [
      {
        name: 'The Shawshank Redemption',
        genre: 'Drama',
        rating: 'R',
        length: '2:22:00'
      },
      {
        name: 'The Godfather',
        genre: 'Crime, Drama',
        rating: 'R',
        length: '2:55:00'
        },
      {
        name: 'The Dark Knight',
        genre: 'Action, Crime, Drama',
        rating: 'PG-13',
        length: '2:32:00'
      },
      {
        name: '12 Angry Men',
        genre: 'Crime, Drama',
        rating: 'NR',
        length: '1:36:00'
      },
      {
        name: 'Pulp Fiction',
        genre: 'Crime, Drama',
        rating: 'R',
        length: '2:34:00'
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
