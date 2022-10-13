import React, { useState } from "react";
import { useContext } from "react";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../../context";
import Modal from "../../modal/Modal";
import RenameProject from "./RenameProject";
import firebase from "../../firebase";

export default function Project({ project, edit }) {
  const [showModal, setShowModal] = useState(false);
  function handleDelete(project) {
    firebase
      .firestore()
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        //Delete all todos under the projectname
        firebase
          .firestore()
          .collection("todos")
          .where("projectName", "==", project.name)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      })
      .then(() => {
        if (selectedProject === project.name) {
          setSelectedProject(defaultProject);
        }
      });
  }
  // CONTExT
  const { selectedProject, defaultProject, setSelectedProject } =
    useContext(TodoContext);

  return (
    <>
      {/* if project exists =>  show project => else "Add project" */}
      {
        <div
          key={project.id}
          onClick={() => setSelectedProject(project.name)}
          className="Sidebar__day"
        >
          {project.name}
          {/* iF clicked on edit => show edit icons else nothing */}
          {edit ? (
            <div>
              <BsPencil
                className="edit__icon"
                onClick={() => setShowModal(true)}
              />
              <MdDeleteForever
                size={18}
                className="delete__icon"
                onClick={() => handleDelete(project)}
              />
            </div>
          ) : (
            <div>
              {/* iF todos greater than 0 show else nothing */}
              {project.numOfTodos > 0 ? (
                <div className="sidebar__todonums">{project.numOfTodos}</div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      }
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}
