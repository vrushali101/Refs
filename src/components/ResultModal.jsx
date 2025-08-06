import { useRef,useImperativeHandle} from "react";

export default function ResultModal({targetTime, result , ref }) {
    const dialog=useRef();
     useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        };
     });
  return (
    <dialog ref={dialog} className="result-modal" >
      <h2>Your Result {result}</h2>
      <p>
        The Target time was <strong> {targetTime} ssecond</strong>
      </p>
      <p>
        You stopped the timer with <strong> X seconds left</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
