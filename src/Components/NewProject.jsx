import { useRef } from 'react';
import Input from "./Input.jsx";
import Modal from './Modal.jsx';

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function HandleSave(){

        const enteredtitle = title.current.value;
        const entereddescription = description.current.value;
        const enteredduedate = duedate.current.value;

        if(enteredtitle.trim() === '' || entereddescription.trim() === '' || enteredduedate.trim() === '')
            {
                modal.current.open();
                return;
            }

        onAdd({
            title: enteredtitle,
            description: entereddescription,
            duedate: enteredduedate,
        });
    }
    
    return (
        <>
        <Modal ref={modal} buttonClose="Okay" >
            <h2 className='text-xl font-bold text-stone-800 my-4'>Invalid Input</h2>
            <h2 className='text-stone-600 mb-4'>Oops.. Enter the valid Details</h2>
         </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950"
                    onClick={onCancel}>
                        Cancel
                    </button>
                </li>
                <li>
                    <button 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={HandleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={duedate} label="Due Date"/>
            </div>
        </div>
        </>
    );
}