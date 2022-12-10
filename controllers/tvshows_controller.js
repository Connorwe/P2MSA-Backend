const tvshows = require("express").Router();
const db = require("../models/");
const { Tvshows, Comment } = db;

tvshows.post('/', async (req, res) => {
  const tvshows = await Tvshows.create(req.body)
  res.json(tvshows)
})

tvshows.get("/", async (req, res) => {
  try {
    const foundTvshows = await Tvshows.findAll({});
    res.status(200).json(foundTvshows);
  } catch (error) {
    res.status(500).json(error);
  }
});

tvshows.get('/:tvshows_id', async (req, res) => {
  let tvshows_id = Number(req.params.tvshows_id)
  if (isNaN(tvshows_id)) {
      res.status(404).json({ message: `Invalid id "${tvshows_id}"` })
  } else {
      const tvshows = await Tvshows.findOne({
          where: { tvshows_id: tvshows_id },
          include: {
              association: 'comments'
          }
      })
      if (!tvshows) {
          res.status(404).json({ message: `Could not find tv show with id "${tvshows_id}"` })
      } else {
          res.json(tvshows)
      }
  }
})

tvshows.put('/:tvshows_id', async (req, res) => {
  let tvshows_id = Number(req.params.tvshows_id)
  if (isNaN(tvshows_id)) {
      res.status(404).json({ message: `Invalid id "${tvshows_id}"` })
  } else {
      const tvshows = await Tvshows.findOne({
          where: { tvshows_id: tvshows_id},
      })
      if (!tvshows) {
          res.status(404).json({ message: `Could not find tv show with id "${tvshows_id}"` })
      } else {
          Object.assign(tvshows, req.body)
          await tvshows.save()
          res.json(tvshows)
      }
  }
})

tvshows.delete('/:tvshows_id', async (req, res) => {
  let tvshows_id = Number(req.params.tvshows_id)
  if (isNaN(tvshows_id)) {
      res.status(404).json({ message: `Invalid id "${tvshows_id}"` })
  } else {
      const tvshows = await Tvshows.findOne({
          where: {
            tvshows_id: tvshows_id
          }
      })
      if (!tvshows) {
          res.status(404).json({ message: `Could not find tv show with id "${tvshows_id}"` })
      } else {
          await tvshows.destroy()
          res.json(tvshows)
      }
  }
})

tvshows.post('/:tvshows_id/comments', async (req, res) => {
  const tvshows_id = Number(req.params.tvshows_id)

  const tvshows = await Tvshows.findOne({
      where: { tvshows_id: tvshows_id }
  })

  if (!tvshows) {
      res.status(404).json({ message: `Could not find tv show with id "${tvshows_id}"` })
  }

  const comment = await Comment.create({
      ...req.body,
      tvshows_id: tvshows_id
  })

  res.send({
      ...comment.toJSON()
  })
})

tvshows.delete('/:tvshows_id/comments/:comment_id', async (req, res) => {
  let tvshows_id = Number(req.params.tvshows_id)
  let comment_id = Number(req.params.comment_id)

  if (isNaN(tvshows_id)) {
      res.status(404).json({ message: `Invalid id "${tvshows_id}"` })
  } else if (isNaN(comment_id)) {
      res.status(404).json({ message: `Invalid id "${comment_id}"` })
  } else {
      const comment = await Comment.findOne({
          where: { comment_id: comment_id, tvshows_id: tvshows_id }
      })
      if (!comment) {
          res.status(404).json({ message: `Could not find comment with id "${comment_id}" for tv show with id "${tvshows_id}"` })
      } else {
          await comment.destroy()
          res.json(comment)
      }
  }
})




module.exports = tvshows;
