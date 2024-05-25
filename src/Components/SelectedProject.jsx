import Tasks from "./Tasks.jsx";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {

    const formatteddate = new Date(project.duedate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    return (
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-stone-300 border-b-2">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button className="text-stone-400 hover:text-stone-900 rounded-sm px-2"
                onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formatteddate}</p>
            <p className="text-stone-700 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
    );
}