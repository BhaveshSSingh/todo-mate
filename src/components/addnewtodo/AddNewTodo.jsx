import React from "react";
import { SiTodoist } from "react-icons/si";
import { IoAddSharp } from "react-icons/io5";
import "./AddNewTodo.css";

function AddNewTodo() {
  return (
    <>
      <button className="addnewtodo">
        <SiTodoist className="todoist__icon" /> New Todo
        <IoAddSharp className="plus__icon" />
      </button>
    </>
  );
}

export default AddNewTodo;
