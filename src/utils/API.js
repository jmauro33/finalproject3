import axios from "axios";
const BASEURL = "";
const APIKEY = "http://www.omdbapi.com/?apikey=[yourkey]&";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
