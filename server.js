// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Rated",
  });
});

// CONTROLLERS
const moviesController = require("./controllers/movies_controller");
app.use("/movies", moviesController);

const tvshowsController = require("./controllers/tvshows_controller");
app.use("/tvshows", tvshowsController);

const videogamesController = require("./controllers/videogames_controller");
app.use("/videogames", videogamesController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});

// // DEPENDENCIES
// const express = require("express");
// const app = express();
// const { Sequelize } = require("sequelize");
// const movies = require("./controllers/movies_controller");

// // CONFIGURATION / MIDDLEWARE
// require("dotenv").config();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // ROOT
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to Rated",
//   });
// });

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }

// // CONTROLLERS
// const moviesController = require("./controllers/movies_controller");
// app.use("/movies", moviesController);

// // LISTEN
// app.listen(process.env.PORT, () => {
//   console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
// });
