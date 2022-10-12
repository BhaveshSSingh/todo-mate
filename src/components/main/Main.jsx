import React, { useContext } from "react";
import { TodoContext } from "../context";
import AddNewTodo from "../main/addnewtodo/AddNewTodo";
import Todos from "../main/todo/Todos";
import "./Main.css";

function Main() {
  const { todos, selectedProject } = useContext(TodoContext);
  return (
    <div className="main">
      <h1 className="main__feed">
        {selectedProject ? selectedProject : "Select a project"}
      </h1>
      <AddNewTodo />
      {selectedProject
        ? todos.map((todo) => <Todos todo={todo} key={todos.id} />)
        : "No project selected!"}
    </div>
  );
}

export default Main;
