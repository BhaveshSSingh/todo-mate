import React, { useState } from "react";
import ProjectForm from "./ProjectForm";

export default function RenameProject({ project, setShowModal }) {
  // let name = project.map((item) => item.name);
  const [newProjectName, setNewProjectName] = useState(project.name);
  // console.log({ project });

  function handleSubmit(e) {}
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
