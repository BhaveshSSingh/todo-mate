import React, { useContext } from "react";
import { TodoContext } from "../context";
import AddNewTodo from "../main/addnewtodo/AddNewTodo";
import Todos from "../main/todo/Todos";
import "./Main.css";

function Main() {
  const { selectedProject } = useContext(TodoContext);
  const todos = [
    {
      id: "d54sd4",
      text: "Go for a run",
      time: "10:00 AM",
      date: "06/03/2021",
      day: "6",
      checked: true,
      color: "#00ff00",
      project: "personal",
    },
    {
      id: "d54fdf",
      text: "Meeting",
      time: "09:00 AM",
      date: "08/03/2021",
      day: "1",
      checked: false,
      color: "#00ff00",
      project: "work",
    },
  ];
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
