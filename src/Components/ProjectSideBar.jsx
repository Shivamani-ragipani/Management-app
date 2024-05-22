import Button from "./Button.jsx";

export default function ProjectSideBar({onSelectedAddProject}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                {/* <img className="image" src="logo1.png" /> */}
                Your Projects
            </h2>
            <Button onClick={onSelectedAddProject}>
                + Add Project
            </Button>
            <ul>  

            </ul>
        </aside>
    );
}   