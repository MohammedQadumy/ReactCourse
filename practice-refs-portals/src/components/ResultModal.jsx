import { useImperativeHandle , useRef } from "react";

export default function ResultModal({ result , targetTime , onReset } , ref) {

    const dialog = useRef()

    useImperativeHandle(ref , ()=>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (<dialog className="result-modal" ref={ref} onClose={onReset}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>);
}