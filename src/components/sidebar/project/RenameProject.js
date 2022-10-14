import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TodoContext } from "../../context";

export default function RenameProject({ project, setShowModal }) {
  const [newProjectName, setNewProjectName] = useState(project.name);
  // context
  const { selectedProject, setSelectedProject } = useContext(TodoContext);
  function renameProject(project, newProjectName) {
    const projectRef = firebase.firestore().collection("projects");
    const todosRef = firebase.firestore().collection("todos");
    const { name: oldProjectName } = project;
    //
    projectRef
      .where("name", "==", newProjectName)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          toast.error("Project with the same name already exists");
        } else {
          projectRef
            .doc(project.id)
            .update({
              name: newProjectName,
            })
            .then(() => {
              todosRef
                .where("projectName", "==", oldProjectName)
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    doc.ref.update({
                      projectName: newProjectName,
                    });
                  });
                });
            })
            .then(() => {
              if (selectedProject === oldProjectName) {
                setSelectedProject(newProjectName);
              }
            });
        }
      });
    toast.success("Project Edited SuccessFully");
  }

  function handleSubmit(e) {
    e.preventDefault();

    renameProject(project, newProjectName);

    setShowModal(false);
  }
  return (
    <div>
      <ProjectForm
        handleSubmit={handleSubmit}
        heading={"Edit Project Name!"}
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText="Confirm"
      />
    </div>
  );
}
