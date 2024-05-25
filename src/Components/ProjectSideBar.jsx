import Button from "./Button.jsx";

export default function ProjectSideBar({onSelectedAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-100 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-2xl text-stone-200">
                {/* <img className="image" src="logo1.png" /> */}
                <em>Your</em> <em className="text-blue-500">Projects</em>
            </h2>
            <Button onClick={onSelectedAddProject}>
                + Add Project
            </Button>
            <ul className="mt-4 rounded-md">  
                {projects.map(project => {
                    let cssClasses = "w-full text-left mt-2 pl-2 py-2 rounded-md rounded-sm my-1 text-white-400 hover:text-blue-200 hover:bg-blue-800"

                    if(project.id === selectedProjectId){
                        cssClasses += "text-blue-200 bg-blue-700";
                    } else {
                        cssClasses += "text-blue-400";
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