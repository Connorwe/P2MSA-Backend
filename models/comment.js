"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Tvshows }) {
      Comment.belongsTo(Movie, { as: "movies", foreignKey: "movie_id" });
      Comment.belongsTo(Tvshows, { as: "tvshows", foreignKey: "tvshows_id" });
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
        type: DataTypes.STRING,
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
      tvshows_id: {
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
