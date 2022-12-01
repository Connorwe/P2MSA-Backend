const movies = require("express").Router();
const db = require("../models/");
const { Movies } = db;

// FIND ALL BANDS
movies.get("/", async (req, res) => {
  try {
    const foundMovies = await Movies.findAll({});
    res.status(200).json(foundMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = movies;
