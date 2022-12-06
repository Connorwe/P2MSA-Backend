const tvshows = require("express").Router();
const db = require("../models/");
const { Tvshows } = db;

// FIND ALL BANDS
tvshows.get("/", async (req, res) => {
  try {
    const foundTvshows = await Tvshows.findAll({});
    res.status(200).json(foundTvshows);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = tvshows;
