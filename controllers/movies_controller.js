const movies = require("express").Router();
const db = require("../models/");
const { Movie } = db;

// FIND ALL BANDS
movies.get("/", async (req, res) => {
  try {
    const foundMovie = await Movie.findAll({});
    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = movies;
