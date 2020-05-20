import React from "react";



function DeleteBtn(props) {
  return (
    <button onClick={props.handleFormDelete} className="btn btn-primary">
    Remove from List
  </button>
  );
}

export default DeleteBtn;
