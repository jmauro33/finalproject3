const router = require("express").Router();
const movieRoutes = require("./moviepost");

// Post routes
router.use("/posts", movieRoutes);

module.exports = router;
