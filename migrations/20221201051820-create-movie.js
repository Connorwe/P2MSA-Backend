"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movies", {
      movie_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rating: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      length: {
        type: Sequelize.TIME,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movies");
  },
};
