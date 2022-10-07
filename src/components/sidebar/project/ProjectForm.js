import React from "react";

export default function ProjectForm({
  handleSubmit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="addproject__modal">
        <h3>{heading}</h3>
        <input
          className="modal__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="project name..."
          autoFocus
        />
      </div>

      <button className="cancel__button" onClick={() => setShowModal(false)}>
        Cancel
      </button>
      <button className="add__button">{confirmButtonText}</button>
    </form>
  );
}
