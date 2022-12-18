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
      showAnswer: false,
    },
    {
      id: 2,
      question: "sar pee p lar",
      answer: "ma sar ya tay buu",
      showAnswer: false,
    },
    {
      id: 3,
      question: "bar sar mar hmar",
      answer: "dan pauk sar mal",
      showAnswer: false,
    },
  ]);

  function openAnswer(id) {
    console.log(id);
    setFaqList(
      faqLists.map((faqList) => {
        if (faqList.id === id) {
          faqList.showAnswer = !faqList.showAnswer;
        } else {
          faqList.showAnswer = false;
        }
        return faqList;
      })
    );
  }

  const [count, setCount] = useState(5);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <>
      <Todo />

      {/* {faqLists.map((faqList) => (
        <FaqItem key={faqList.id} openAnswer={openAnswer} faqList={faqList} />
      ))} */}
      {/* <Counter
        start={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      <Counter
        start={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      <Counter
        start={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      /> */}
    </>
  );
};

export default App;
