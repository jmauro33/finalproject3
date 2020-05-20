const db = require("../models");
const axios = require("axios")
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy" ;

module.exports = { 
    getMovie: function(query){
        return axios.get(BASEURL + query + APIKEY);
    },
    createMovie: function(movieObject){
        return db.Movie.create(movieObject).then(function(result){
            return result
        })
    },
    retrieveMovie: function(){
        return db.Movie.find({}).then(function(result){
            console.log(result);
            return result
        })
    },
    deleteMovie: function(){
        

    }
    
};
