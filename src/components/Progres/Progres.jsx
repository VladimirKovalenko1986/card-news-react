import css from "./Progres.module.css";

export default function Progres({ current, total }) {
  return (
    <p className={css.text}>
      {current}/{total}
    </p>
  );
}
