import { useState, useEffect } from "react";
import css from "./Reader.module.css";
import Conrols from "../Conrols/Conrols";
import Progres from "../Progres/Progres";
import ArticleView from "../ArticleView/ArticleView";

export default function Reader({ items }) {
  const progresLocalKey = "localkey";
  const [selectedIdx, setSelectedIdx] = useState(() => {
    const savedSelectedIdx = window.localStorage.getItem(progresLocalKey);
    return savedSelectedIdx !== null ? JSON.parse(savedSelectedIdx) : 0;
  });

  const totalItems = items.length;
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalItems - 1;
  const currentItem = items[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  useEffect(() => {
    localStorage.setItem(progresLocalKey, JSON.stringify(selectedIdx));
  }, [selectedIdx]);

  return (
    <div>
      <div className={css.conteiner}>
        <Conrols
          onPrev={handlePrev}
          onNext={handleNext}
          isFirst={isFirst}
          isLast={isLast}
        />
        <Progres current={selectedIdx + 1} total={totalItems} />
      </div>

      <ArticleView article={currentItem} />
    </div>
  );
}
