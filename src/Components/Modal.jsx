import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({children, buttonClose}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();

            }
        };
    }
    )

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-5 py-4 px-7 rounded-md shadow-md">
            {children}
            <form method="dailog" className="mt-4 text-right">
                <Button>{buttonClose}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );   

});

export default Modal;