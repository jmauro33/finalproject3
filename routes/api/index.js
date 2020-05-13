const router = require("express").Router();
const movieRoutes = require("./moviepost");

// Post routes
router.use("/movies", movieRoutes);

module.exports = router;
