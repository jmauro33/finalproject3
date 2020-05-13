const router = require("express").Router();
const movieController = require("../../controllers/movieController");


router.post("/save", (req, res) => {
  console.log("HELLO WORLD");

  res.json(movieController.createMovie(req.body))
});

router.post("/savedmovies", (req, res) => {
  console.log(req.body);

  movieController.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});
0

module.exports = router;
