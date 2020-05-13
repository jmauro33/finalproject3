const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router.post("/submit", (req, res) => {
  console.log(req.body);

  movieController.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});














module.exports = router;
