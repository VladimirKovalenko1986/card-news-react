import css from "./Controls.module.css";

export default function Conrols({ onPrev, onNext, isFirst, isLast }) {
  return (
    <div className={css.conteiner}>
      <button className={css.button} onClick={onPrev} disabled={isFirst}>
        Prev
      </button>
      <button className={css.button} onClick={onNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
}
