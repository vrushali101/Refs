import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
//let timer;
export default function TimerChallenges({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer=useRef();
  const dialog=useRef();
  
  function handleStart() {
    timer.current=setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function handleStop(){
    clearTimeout(timer.current);
  }
  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} result="Lost"/>
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timmer is running ..." : "Timer is Inactive"}
      </p>
    </section>
    </>
  );
}
