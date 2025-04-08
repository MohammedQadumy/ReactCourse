import Input from "./Input.jsx";
import { useRef } from "react";
import  Modal from "./Modal.jsx";

export default function NewProject({onAdd , onCancel}) {


    const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;
    if(enteredTitle.trim() ===''  || enteredDate.trim() ==='' || enteredDescription.trim() ===''){
        modal.current.open();
        return;
    }
    onAdd({
        title:enteredTitle,
        description:enteredDescription,
        dueDate:enteredDate
    });
  }

  return (
    <>
    <Modal ref={modal} >
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Looks like your forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for a every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4 ">
      <li>
        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
      </li>
      <li>
        <button onClick={handleSave} className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </li>
    </menu>
    <div>
      <Input ref={title} label="Title"></Input>
      <Input ref={description} label="Description" textarea></Input>
      <Input ref={dueDate} type="date" label="Due Date"></Input>
    </div>
  </div></>
    
  );
}
