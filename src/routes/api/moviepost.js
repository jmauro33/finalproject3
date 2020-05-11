const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/posts"
router
  .route("/")
  .get(movieController.findAll)
  .post(movieController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(movieController.findById)


module.exports = router;
