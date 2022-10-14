import { EditTodo } from "./EditTodo";
import React, { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import "./Todos.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TodoContext } from "../../context";

function Todos({ todo }) {
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  // context
  const { setSelectedTodo } = useContext(TodoContext);

  function handleCheck(todo) {
    firebase.firestore().collection("todos").doc(todo.id).update({
      checked: !todo.checked,
    });
  }

  function handleDelete(todo) {
    firebase.firestore().collection("todos").doc(todo.id).delete();
    toast("Todo Deleted");
  }

  return (
    <>
      <div
        onClick={() => setSelectedTodo(todo)}
        className="todos"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div onClick={() => handleCheck(todo)}>
          {todo.checked ? (
            <RiCheckboxCircleFill size={20} color="rgb(165, 165, 165)" />
          ) : (
            <RiCheckboxBlankCircleLine size={20} color={todo.color} />
          )}
        </div>

        <div className="todos__text" key={todo.id}>
          <h4
            className={`line ${todo.checked ? "line-through" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {todo.text}
          </h4>
          <h6>
            {todo.date} - {todo.time} - {todo.projectName}
          </h6>
        </div>
        <div className="delete__todo">
          {(hover || todo.checked) && (
            <MdDeleteForever
              size={20}
              className="icon"
              color="var(--red)"
              onClick={() => handleDelete(todo)}
            />
          )}
        </div>

        <button onClick={() => setShowModal(true)}>
          <BsThreeDots color="var(--blue)" size={20} />
        </button>
      </div>
      <hr />
      <EditTodo
        showModal={showModal}
        setShowModal={setShowModal}
        todo={todo}
        onClick={() => setSelectedTodo(todo)}
      />
    </>
  );
}

export default Todos;
