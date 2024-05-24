import Button from "./Button.jsx";

export default function ProjectSideBar({onSelectedAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                {/* <img className="image" src="logo1.png" /> */}
                Your Projects
            </h2>
            <Button onClick={onSelectedAddProject}>
                + Add Project
            </Button>
            <ul className="mt-4">  
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-1 py-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"

                    if(project.id === selectedProjectId){
                        cssClasses += "text-stone-200 bg-stone-800";
                    } else {
                        cssClasses += "text-stone-400";
                    }
                    return (
                        <li key={project.id}>
                        <button
                         className={cssClasses}
                        onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>
                );
                    
             } )}

            </ul>
        </aside>
    );
}   