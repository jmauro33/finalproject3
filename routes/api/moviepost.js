const router = require("express").Router();
const movieController = require("../../controllers/movieController");


router.post("/save", (req, res) => {
  console.log("HELLO WORLD");

  res.json(movieController.createMovie(req.body))
});

router.get("/save",( req, res) => {
  console.log("Test");
  movieController.retrieveMovie().then(function(results){
   res.json(results)  
  })
 
});

router.delete("/save/:id",( req, res,) => {
  movieController.deleteMovie(req.params.id).then(function(results){
    res.json(results)
  })
});

module.exports = router;
