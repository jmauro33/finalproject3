import React from "react";

function nav (){
  return (
    <nav className="navbar navbar-light bg-light">
    <span clasName="navbar-brand mb-0 h1">Movie Searcher</span>
    <a class="nav-link" href="./savedmovies">Saved Movies</a>
    <a class="nav-link" href="./Appcontainer.js">Home</a>
  </nav>
  );
}

export default nav;