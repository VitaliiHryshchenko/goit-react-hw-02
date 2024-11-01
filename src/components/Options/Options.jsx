import s from "./Options.module.css";
const Options = ({ totalFeedback, onClick, resetFeedback }) => {
  return (
    <div>
      <button className={s.button} onClick={() => onClick("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
