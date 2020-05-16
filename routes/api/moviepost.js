const router = require("express").Router();
const movieController = require("../../controllers/movieController");


router.post("/save", (req, res) => {
  console.log("HELLO WORLD");

  res.json(movieController.createMovie(req.body))
});



module.exports = router;
