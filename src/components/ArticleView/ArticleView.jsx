import css from "./ArticleView.module.css";

export default function ArticleView({ article: { topic, text } }) {
  return (
    <article>
      <h2 className={css.title}>{topic}</h2>
      <p>{text}</p>
    </article>
  );
}
