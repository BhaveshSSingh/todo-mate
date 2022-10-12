import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectForm({
  handleSubmit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) {
  // toast("🦄 Wow so easy!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // });

  // toast.error("Error Notification !", {
  //   position: toast.POSITION.TOP_LEFT,
  // });
  const notify = () => toast("Wow so easy!");

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
      <button onClick={notify} className="add__button">
        {confirmButtonText}
      </button>{" "}
      {/* <ToastContainer /> */}
    </form>
  );
}
