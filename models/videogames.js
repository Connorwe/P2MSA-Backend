"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videogames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment}) {
      Videogames.hasMany(Comment, { foreignKey: "comment_id", as: "comments" });
    }
  }
  Videogames.init(
    {
      videogame_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Videogames",
      tableName: "videogames",
      timestamps: false,
    }
  );
  return Videogames;
};
