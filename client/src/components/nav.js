import React from "react";
import {Link} from "react-router-dom";
function nav (){
  return (
    <nav className="navbar navbar-light bg-light">
    <span clasName="navbar-brand mb-0 h1">Movie Searcher</span>
    <Link class="nav-link" to="/savedmovies">Saved Movies</Link>
    <Link class="nav-link" to="/">Home</Link>
  </nav>
  );
}

export default nav;