import { EditTodo } from "./EditTodo";
import React, { useState } from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import "./Todos.css";

function Todos() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="todos">
        <RiCheckboxBlankLine className="checkbox__icon" />
        <h4 className="todos__text">Go for a run</h4>
        <button onClick={() => setShowModal(true)}>
          <BsThreeDots />
        </button>
      </div>
      <EditTodo showModal={showModal} setShowModal={setShowModal} />
      <hr />
    </>
  );
}

export default Todos;
