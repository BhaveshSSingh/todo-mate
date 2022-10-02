import React, { useRef } from "react";
import "./Modal.css";

export default function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef();
  function closeModal(e) {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }
  return (
    showModal && (
      <div className="Modal" onClick={closeModal} ref={modalRef}>
        <div className="container">{children}</div>
      </div>
    )
  );
}
