export default function ResultModal({ref, targetTime, result }) {
  return (
    <dialog className="result-modal" ref={ref}>
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
