import React from "react";
import AddNewTodo from "../addnewtodo/AddNewTodo";
import Todos from "../todo/Todos";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <h1 className="main__feed">Today</h1>
      <AddNewTodo />
      <Todos />
      <Todos />
      <Todos />
    </div>
  );
}

export default Main;
