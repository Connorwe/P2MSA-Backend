"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tvshows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment}) {
      Tvshows.hasMany(Comment, { foreignKey: "comment_id", as: "comments" });
    }
  }
  Tvshows.init(
    {
      tvshows_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
      episodes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      length: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tvshows",
      tableName: "tvshows",
      timestamps: false,
    }
  );
  return Tvshows;
};
