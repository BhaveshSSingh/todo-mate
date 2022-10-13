import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import firebase from "../../firebase";

export default function RenameProject({ project, setShowModal }) {
  // let name = project.map((item) => item.name);
  const [newProjectName, setNewProjectName] = useState(project.name);
  // console.log({ project });

  function renameProject(project, newProjectName) {
    firebase.firestore().collection("projects").doc(project.id).update({
      name: newProjectName,
    });
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
