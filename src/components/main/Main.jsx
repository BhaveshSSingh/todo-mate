import React from "react";
import AddNewTodo from "../main/addnewtodo/AddNewTodo";
import Todos from "../main/todo/Todos";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <h1 className="main__feed">Today</h1>
      <AddNewTodo />
      <Todos />
      <Todos />
    </div>
  );
}

export default Main;
