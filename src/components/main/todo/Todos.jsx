import { EditTodo } from "./EditTodo";
import React, { useState } from "react";
import { RiCheckboxBlankLine, RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import "./Todos.css";

function Todos() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="todos">
        <RiCheckboxBlankLine className="checkbox__icon" />
        <h4 className="todos__text">Go for a run</h4>
        <RiDeleteBin6Line className="icon" color="var(--red)" />

        <button onClick={() => setShowModal(true)}>
          <BsThreeDots color="var(--blue)" />
        </button>
      </div>
      <EditTodo showModal={showModal} setShowModal={setShowModal} />
      <hr />
      <div className="todos">
        <RiCheckboxBlankLine className="checkbox__icon" />
        <h4 className="todos__text"> run</h4>
        <RiDeleteBin6Line className="icon" color="var(--red)" />

        <button onClick={() => setShowModal(true)}>
          <BsThreeDots color="var(--blue)" />
        </button>
      </div>
      <EditTodo showModal={showModal} setShowModal={setShowModal} />
      <hr />
    </>
  );
}

export default Todos;
