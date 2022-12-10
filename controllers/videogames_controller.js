const videogames = require("express").Router();
const db = require("../models/");
const { Videogames, Comment } = db;

videogames.post('/', async (req, res) => {
  const videogame = await Videogames.create(req.body)
  res.json(videogame)
})

videogames.get("/", async (req, res) => {
  try {
    const foundvideogame = await Videogames.findAll({});
    res.status(200).json(foundvideogame);
  } catch (error) {
    res.status(500).json(error);
  }
});

videogames.get('/:videogame_id', async (req, res) => {
  let videogame_id = Number(req.params.videogame_id)
  if (isNaN(videogame_id)) {
      res.status(404).json({ message: `Invalid id "${videogame_id}"` })
  } else {
      const videogame = await Videogames.findOne({
          where: { videogame_id: videogame_id },
          include: {
              association: 'comments'
          }
      })
      if (!videogame) {
          res.status(404).json({ message: `Could not find videogame with id "${videogame_id}"` })
      } else {
          res.json(videogame)
      }
  }
})

videogames.put('/:videogame_id', async (req, res) => {
  let videogame_id = Number(req.params.videogame_id)
  if (isNaN(videogame_id)) {
      res.status(404).json({ message: `Invalid id "${videogame_id}"` })
  } else {
      const videogame = await Videogames.findOne({
          where: { videogame_id: videogame_id},
      })
      if (!videogame) {
          res.status(404).json({ message: `Could not find videogame with id "${videogame_id}"` })
      } else {
          Object.assign(videogame, req.body)
          await Videogames.save()
          res.json(videogame)
      }
  }
})

videogames.delete('/:videogame_id', async (req, res) => {
  let videogame_id = Number(req.params.videogame_id)
  if (isNaN(videogame_id)) {
      res.status(404).json({ message: `Invalid id "${videogame_id}"` })
  } else {
      const videogame = await Videogames.findOne({
          where: {
            videogame_id: videogame_id
          }
      })
      if (!videogame) {
          res.status(404).json({ message: `Could not find videogame with id "${videogame_id}"` })
      } else {
          await Videogames.destroy()
          res.json(videogame)
      }
  }
})

videogames.post('/:videogame_id/comments', async (req, res) => {
  const videogame_id = Number(req.params.videogame_id)

  const videogame = await Videogames.findOne({
      where: { videogame_id: videogame_id }
  })

  if (!videogame) {
      res.status(404).json({ message: `Could not find videogame with id "${videogame_id}"` })
  }

  const comment = await Comment.create({
      ...req.body,
      videogame_id: videogame_id
  })

  res.send({
      ...comment.toJSON()
  })
})

videogames.delete('/:videogame_id/comments/:comment_id', async (req, res) => {
  let videogame_id = Number(req.params.videogame_id)
  let comment_id = Number(req.params.comment_id)

  if (isNaN(videogame_id)) {
      res.status(404).json({ message: `Invalid id "${videogame_id}"` })
  } else if (isNaN(comment_id)) {
      res.status(404).json({ message: `Invalid id "${comment_id}"` })
  } else {
      const comment = await Comment.findOne({
          where: { comment_id: comment_id, videogame_id: videogame_id }
      })
      if (!comment) {
          res.status(404).json({ message: `Could not find comment with id "${comment_id}" for videogame with id "${videogame_id}"` })
      } else {
          await comment.destroy()
          res.json(comment)
      }
  }
})

module.exports = videogames;