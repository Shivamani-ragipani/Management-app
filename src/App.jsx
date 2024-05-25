import { useState } from 'react';
import ProjectSideBar from "./Components/ProjectSideBar.jsx";
import NewProject from "./Components/NewProject.jsx";
import Input from './Components/Input.jsx';
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from './Components/SelectedProject.jsx';

function App() {
  const [ProjectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    Projects: [],
    tasks: [],
  });

  function HandleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  function HandleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        Projects: prevState.Projects.filter((project) => project.id !== prevState.selectedProjectID ),
      };
    });
  }

  function HandleAddTask(text){
   
    setProjectsState(prevState => {
       const taskId = Math.random();
       const newTask = {
        text: text,
        projectId: [prevState.selectedProjectID],
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });

  }

  function HandleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id ),
      };
    });

  }
  
  function HandleAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function HandleCancelProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    })
  }

  function HandleCreateProject(projectData){
    setProjectsState(prevState => { 
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        Projects: [...prevState.Projects, newProject],
      };
    });
  }

  const selectedProject = ProjectsState.Projects.find(project => project.id === ProjectsState.selectedProjectID)

  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={HandleDeleteProject} 
  onAddTask={HandleAddTask} 
  onDeleteTask={HandleDeleteTask}
  tasks={ProjectsState.tasks}
  />;

  if(ProjectsState.selectedProjectID === null){
    content = <NewProject onAdd={HandleCreateProject} onCancel={HandleCancelProject} />
  } else if(ProjectsState.selectedProjectID === undefined){
    content = <NoProjectSelected onSelectedAddProject={HandleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
       onSelectedAddProject={HandleAddProject}
       projects={ProjectsState.Projects}
       onSelectProject={HandleSelectProject}
       selectedProjectId={ProjectsState.selectedProjectID }/>
      {content}
    </main>
  );
}

export default App;
