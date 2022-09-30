import React from "react";
import { Plus } from "react-bootstrap-icons";
import "./AddNewTodo.css";

function AddNewTodo() {
  return (
    <>
      <button className="addnewtodo">
        New Todo
        <Plus className="addnewtodo__plus" />
      </button>
    </>
  );
}

export default AddNewTodo;
