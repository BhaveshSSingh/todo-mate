import React, { useState } from "react";
import { useContext } from "react";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../../context";
import Modal from "../../modal/Modal";
import RenameProject from "./RenameProject";

export default function Project({ project, edit, name }) {
  const [showModal, setShowModal] = useState(false);

  // const [edit, setEdit] = useState(false);

  // CONTExT
  const { setSelectedProject } = useContext(TodoContext);

  return (
    <>
      <section className="Sidebar__days">
        {/* if project exists =>  show project => else "Add project" */}
        {project.length
          ? project.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item.name)}
                className="Sidebar__day"
              >
                {item.name}
                {/* iF clicked on edit => show edit icons else nothing */}
                {edit ? (
                  <div>
                    <BsPencil
                      className="edit__icon"
                      onClick={() => setShowModal(true)}
                    />
                    <MdDeleteForever size={18} className="delete__icon" />
                  </div>
                ) : (
                  <div>
                    {/* iF todos greater than 0 show else nothing */}
                    {item.numOfTodos > 0 ? (
                      <div className="sidebar__todonums">{item.numOfTodos}</div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            ))
          : "Add project!"}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <RenameProject project={project} setShowModal={setShowModal} />
        </Modal>
      </section>
    </>
  );
}
