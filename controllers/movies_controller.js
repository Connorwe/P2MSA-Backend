const movies = require("express").Router();
const db = require("../models/");
const { Movie } = db;

movies.post('/', async (req, res) => {
  const movie = await Movie.create(req.body)
  res.json(movie)
})


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
          //     association: 'comments',
          //     include: 'author'
          // }
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find place with id "${movie_id}"` })
      } else {
          res.json(movie)
      }
  }
})

movies.put('/:movie_id', async (req, res) => {
  let movie_id = Number(req.params.movie_id)
  if (isNaN(movie_id)) {
      res.status(404).json({ message: `Invalid id "${movie_id}"` })
  } else {
      const movie = await Movie.findOne({
          where: { movie_id: movie_id},
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find place with id "${movie_id}"` })
      } else {
          Object.assign(movie, req.body)
          await movie.save()
          res.json(movie)
      }
  }
})

movies.delete('/:movie_id', async (req, res) => {
  let movie_id = Number(req.params.movie_id)
  if (isNaN(movie_id)) {
      res.status(404).json({ message: `Invalid id "${movie_id}"` })
  } else {
      const movie = await Movie.findOne({
          where: {
            movie_id: movie_id
          }
      })
      if (!movie) {
          res.status(404).json({ message: `Could not find place with id "${movie_id}"` })
      } else {
          await movie.destroy()
          res.json(movie)
      }
  }
})

module.exports = movies;
