const router = require("express").Router();
const movieController = require("../../controllers/movieController");


router
  .route("/")
  .get(movieController.findAll)
  .post(movieController.create);

router
  .route("/:id")
  .get(movieController.findById)


module.exports = router;
