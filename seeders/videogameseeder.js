'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('videogames', [
      {
        name:'The Legend of Zelda: Ocarina of Time',
        genre: 'Action, Adventure, Fantasy',
        rating: 'E'
      },
      {
        name: 'Grand Theft Auto',
        genre: 'Action, Adventure, Modern, Open-World',
        rating: 'M'
      },
      {
        name: 'Super Mario Galaxy',
        genre: 'Action, Platformer, 3D',
        rating: 'E'
      },
      {
        name: 'Halo: Combat Evolved',
        genre: 'Action, Shooter, First-Person, Sci-Fi',
        rating: 'M'
      },
      {
        name: 'Madden NFL 21',
        genre: 'Sports, Team, Football, Sim',
        rating: 'E'
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('videogames', null, {});
  }
};
