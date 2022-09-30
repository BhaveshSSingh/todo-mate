import React from "react";
import { CheckSquare, ThreeDots } from "react-bootstrap-icons";
import "./Todos.css";

function Todos() {
  return (
    <div className="todos">
      <CheckSquare />
      <h4 className="todos__text">Go for a run</h4>
      <ThreeDots />
    </div>
  );
}

export default Todos;
