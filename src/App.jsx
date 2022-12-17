import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import Counter from "./components/Counter";
import ShowName from "./components/ShowName";
import FaqItem from "./components/FaqItem";
const App = () => {
  const [faqLists, setFaqList] = useState([
    {
      id: 1,
      question: "nay ka lar",
      answer: "kg tal",
    },
    {
      id: 2,
      question: "sar pee p lar",
      answer: "ma sar ya tay buu",
    },
    {
      id: 3,
      question: "bar sar mar hmar",
      answer: "dan pauk sar mal",
    },
  ]);

  return (
    <>
      {faqLists.map((faqList) => (
        <FaqItem key={faqList.id} faqList={faqList} />
      ))}
    </>
  );
};

export default App;
