import React, { useState } from "react";
import { SiTodoist } from "react-icons/si";
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { BsBell } from "react-icons/bs";
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
          <div className="newtodo__modal__header">
            <h3>Add a new to do!</h3>

            <button onClick={() => setShowModal(false)}>
              <MdOutlineCancel size={20} />
            </button>
          </div>
          <div className="newtodo__modal__text">
            <input
              className="modal__input"
              type="text"
              placeholder="To do..."
            />
          </div>
          <div className="newtodo__modal__text2">
            <BsBell className="icon" />
            Remind Me!
          </div>
          <div className="modal__time"></div>
          <button>
            Add Todo <IoAddSharp className="plus__icon" />
          </button>
        </div>
      </Modal>
    </>
  );
}

export default AddNewTodo;
