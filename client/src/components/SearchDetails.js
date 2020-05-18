import React from "react";

function SearchDetails(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
      <h3>Plot: {props.plot}</h3>
      {props.isSaved ?
      null : 
     <button onClick={props.handleSaveMovie} className="btn btn-primary">
          Save Movie
        </button> 
    }
      
    </div>
  );
}

export default SearchDetails;
