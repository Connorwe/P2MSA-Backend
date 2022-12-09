"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stars: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      tvshow_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      videogame_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
