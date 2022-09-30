import React from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import "./Todos.css";

function Todos() {
  return (
    <>
      <div className="todos">
        <RiCheckboxBlankLine className="checkbox__icon" />
        <h4 className="todos__text">Go for a run</h4>
        <BsThreeDots />
      </div>
      <hr />
    </>
  );
}

export default Todos;
