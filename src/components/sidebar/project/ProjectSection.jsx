import React, { useState } from "react";
import { IoColorPaletteOutline, IoAddSharp } from "react-icons/io5";
import { BsPencil, BsCaretUp } from "react-icons/bs";
import Modal from "../../modal/Modal";
import "../Sidebar.css";
import ProjectForm from "./ProjectForm";
import Project from "./Project";
import { projects } from "../../constant";

export function ProjectSection({}) {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);

  const [showModal, setShowModal] = useState(false);
  // Project form
  const [projectName, setProjectName] = useState("");
  const handleSubmit = (e) => {};

  return (
    <>
      <section className="Sidebar__header">
        <div>
          <h3>
            <IoColorPaletteOutline className="icon__title" />
            Project
          </h3>
        </div>
        <div>
          {showMenu && projects.length > 0 && (
            <BsPencil
              onClick={() => setEdit((edit) => !edit)}
              className="icon"
              size={17}
              color={edit ? "var(--green)" : ""}
            />
          )}

          <button onClick={() => setShowModal(true)}>
            <IoAddSharp className="icon" size={20} />
          </button>
          <button>
            <BsCaretUp size="20" />
          </button>
        </div>
      </section>
      <hr />
      {/* Project */}
      <section className="Sidebar__days">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Project project={project} edit={edit} key={project.id} />
          ))
        ) : (
          <p style={{ color: "var(--red)" }}>
            Please add a project before proceeding
          </p>
        )}
      </section>

      {/* project */}
      <hr />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading={"New Project !"}
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText="+ Add Project"
        />
      </Modal>
    </>
  );
}
