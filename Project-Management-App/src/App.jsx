import NewProject from "./Components/NewProject.jsx";
import ProjectsSideBar from "./Components/ProjectsSideBar.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectState] = useState({
    slectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  console.log(projectsState);
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject}></SelectedProject>;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      ></NewProject>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  }else{

  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      ></ProjectsSideBar>
      {content}
    </main>
  );
}

export default App;
