import { useState } from 'react';
import ProjectSideBar from "./Components/ProjectSideBar.jsx";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";

function App() {
  const [ProjectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    NoProject: [],
  });

  function HandleAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  let content;

  if(ProjectsState.selectedProjectID === null){
    content = <NewProject />
  } else if(ProjectsState.selectedProjectID === undefined){
    content = <NoProjectSelected onSelectedAddProject={HandleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onSelectedAddProject={HandleAddProject}/>
      {content}
    </main>
  );
}

export default App;
