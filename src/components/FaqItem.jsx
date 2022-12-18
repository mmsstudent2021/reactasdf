import React, { useState } from "react";

function FaqItem({ faqList, openAnswer }) {
  // const [showAnswer, setShowAnswer] = useState(false);
  const showQuestionBg = faqList.showAnswer ? "bg-primary text-white" : "";
  return (
    <div className="m-3">
      <div
        onClick={() => openAnswer(faqList.id)}
        className={` ${showQuestionBg} border d-flex  border-primary rounded p-3 text-primary`}
      >
        {faqList.question}
        <span className={` ms-auto ${faqList.showAnswer ? "down" : ""}`}>
          &gt;{" "}
        </span>
      </div>
      {faqList.showAnswer && (
        <div className="p-3 ani-effect">
          {faqList.answer}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          doloribus, amet sunt labore illum laudantium, aut velit fugit delectus
          tempora consequuntur architecto minus natus, quas dolorum nobis
          perspiciatis atque nemo!
        </div>
      )}
    </div>
  );
}

export default FaqItem;
