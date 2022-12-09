const movies = require("express").Router();
const db = require("../models/");
const { Movie } = db;

// FIND ALL 
movies.get("/", async (req, res) => {
  try {
    const foundMovie = await Movie.findAll({});
    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});


movies.get('/:movie_id', async (req, res) => {
  let movie_id = Number(req.params.movie_id)
  if (isNaN(movie_id)) {
      res.status(404).json({ message: `Invalid id "${movie_id}"` })
  } else {
      const movie = await Movie.findOne({
          where: { movie_id: movie_id },
          // include: {
          //     association: 'comments'
          // }
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find place with id "${movie_id}"` })
      } else {
          res.json(movie)
      }
  }
})

module.exports = movies;
