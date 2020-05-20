import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy" ;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  save: function(movie) {
    return axios.post("/movies/save", movie );
  },
  retrive: function() {
    return axios.get("/movies/save");
  },
  delete: function(id) {
    return axios.delete("/movies/save/"+ id);
  }
};
