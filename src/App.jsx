import "./App.css";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  function addProject(newProject) {
    setProjects((currentProjects) => [
      { ...newProject, id: Date.now() },
      ...currentProjects,
    ]);
  }

  function deleteProject(id) {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id)
    );
  }

  return (
    <main>
      <ProjectForm onAdd={addProject} />
      <ProjectList projects={projects} onDelete={deleteProject} />
    </main>
  );
}

export default App;