import NewTasks from "./NewTasks.jsx";

export default function Tasks({tasks, onAdd, onDelete}) {
    return (
        <section>
            <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
            <h2 className="text-xl font-bold text-stone-700 mb-4">
                <NewTasks onAdd={onAdd}/>
            </h2>
            {tasks.length === 0 && <p className="font-bold text-stone-600 my-4 mt-8">
                This Project Doesn't have any Tasks yet.
            </p>}
            {tasks.length > 0 && (
                 <ul className="font-bold p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => 
                    <li key={task.id} className="flex justify-between my-4">
                     <span>{task.text}</span>
                     <button 
                        className="text-stone-400 hover:text-red-500"
                        onClick={() => onDelete(task.id)}>
                        Clear
                    </button>
                    </li>)}
                
                 </ul>   
            )}
           
        </section>
    );
}