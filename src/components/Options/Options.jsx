import css from "../Options/Options.module.css";

export default function Options({ onUpdate, onReset }) {
  return (
    <div className={css.list}>
      <button className={css.btn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      <button className={css.btn} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
