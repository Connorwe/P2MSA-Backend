// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const movies = require("./controllers/movies_controller");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI);

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Rated",
  });
});

// CONTROLLERS
const moviesController = require("./controllers/movies_controller");
app.use("/movies", moviesController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
