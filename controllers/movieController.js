const db = require("../models");
const axios = require("axios")
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy" ;

module.exports = { 
    getMovie: function(query){
        return axios.get(BASEURL + query + APIKEY);
    },
    createMovie: function(req, res){
        return db.Movie.create(req.body.movie).then(function(result){
            res.json(result);
        })
    }
};
