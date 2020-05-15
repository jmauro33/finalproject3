import React from "react";

function saveMovieCard(props) {
  return (

    <div className="savecard text-center">
      <div className="card-header">
        <h1>View your Saved Movies or TV Shows</h1>
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default saveMovieCard;
