import { useState } from "react";

export default function NewTasks({onAdd}) {
    const [enteredTask, setEnteredTask] = useState();

    function HandleChange(event) {
        setEnteredTask(event.target.value);
    }

    function HandleClick(){
        if(enteredTask.trim() === ''){
            return ;
        }
       onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex item-center gap-4"> 
            <input 
            type="text" className="w-64 px-2 py-1 rounded-sm bg-blue-200" 
            onChange={HandleChange}
            value={enteredTask}
             />
            <button
             className="text-stone-300 hover:text-stone-600 rounded-sm px-2"
             onClick={HandleClick}>
                Add Task
            </button>
        </div>
    );
}