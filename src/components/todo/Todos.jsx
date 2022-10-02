import React, { useState } from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import "./Todos.css";
import Modal from "../modal/Modal";
import { MdOutlineCancel } from "react-icons/md";

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
      </div>{" "}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <button onClick={() => setShowModal(false)}>
            <MdOutlineCancel />
          </button>
          <button>
            Add Todo <IoAddSharp className="plus__icon" />
          </button>
        </div>
      </Modal>
      <hr />
    </>
  );
}

export default Todos;
