import React, { useState } from "react";

function FaqItem({ faqList }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const showQuestionBg = showAnswer ? "bg-primary text-white" : "";
  return (
    <div className="m-3">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className={` ${showQuestionBg} border d-flex  border-primary rounded p-3 text-primary`}
      >
        {faqList.question}
        <span className={` ms-auto ${showAnswer ? "down" : ""}`}>&gt; </span>
      </div>
      {showAnswer && <div className="p-3">{faqList.answer}</div>}
    </div>
  );
}

export default FaqItem;
