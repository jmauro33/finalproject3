import React from "react";



function DeleteBtn(props) {
  return (
    <button onClick={props.handleFormSubmit} className="btn btn-primary">
    Remove from Saved Movie
  </button>
  );
}

export default DeleteBtn;
