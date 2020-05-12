const router = require("express").Router();
const movieController = require("../../controllers/movieController");


router
  .route("/")
  .get(movieController.findAll)
  .post(movieController.createMovie);

router
  .route("/:id")
  .get(movieController.findById)


module.exports = router;
