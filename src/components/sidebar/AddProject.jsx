import React, { useState } from "react";
import { IoColorPaletteOutline, IoAddSharp } from "react-icons/io5";
import { BsPencil, BsCaretUp } from "react-icons/bs";
import Modal from "../modal/Modal";
import "./Sidebar.css";

export function AddProject({}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="Sidebar__header">
        <div>
          <h3>
            <IoColorPaletteOutline className="icon__title" />
            Projects
          </h3>
        </div>
        <div>
          <BsPencil className="icon" size={17} />
          <button onClick={() => setShowModal(true)}>
            <IoAddSharp className="icon" size={20} />
          </button>
          <button>
            <BsCaretUp size="20" />
          </button>
        </div>
      </section>
      <hr />
      <section className="Sidebar__days">
        <div className="Sidebar__day">personal</div>
        <div className="Sidebar__day">work</div>
        <div className="Sidebar__day">others</div>
      </section>
      <hr />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="addproject__modal">
          <h3>New Project!</h3>
          <input
            autoFocus
            className="modal__input"
            type="text"
            placeholder="project name..."
          />
        </div>
        <button className="cancel__button" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="add__button">+ Add Todo</button>
      </Modal>
    </>
  );
}
