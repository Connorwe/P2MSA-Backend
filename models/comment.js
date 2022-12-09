"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Movie) {
      Comment.belongsTo(Movie, { as: "movies", foreignKey: "movie_id" });
    }
  }
  Comment.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stars: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tvshow_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      videogame_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
      timestamps: false,
    }
  );
  return Comment;
};
