import React, { useState } from "react";
import { SiTodoist } from "react-icons/si";
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import "./AddNewTodo.css";
import Modal from "../modal/Modal";

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="addnewtodo" onClick={() => setShowModal(true)}>
        <SiTodoist className="todoist__icon" /> New Todo
        <IoAddSharp className="plus__icon" />
      </button>
      {/* Modal */}
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
    </>
  );
}

export default AddNewTodo;
