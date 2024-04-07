import Reader from "../Reader/Reader";
import css from "./App.module.css";
import articles from "../../articles.json";

export default function App() {
  return (
    <div className={css.conteiner}>
      <Reader items={articles} />
    </div>
  );
}
