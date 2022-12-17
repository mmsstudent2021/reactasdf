import React from "react";
import Input from "./Input";
import ListItem from "./ListItem";

const Todo = () => {
  const lists = [
    {
      id: 1,
      text: "to read js book",
      isDone: true,
    },
    {
      id: 2,
      text: "eat dan pauk",
      isDone: false,
    },
    {
      id: 3,
      text: "to sleep",
      isDone: false,
    },
    {
      id: 4,
      text: "php revision",
      isDone: false,
    },
  ];

  return (
    <div className="p-3">
      <h1>Todo</h1>
      <Input />
      <hr />
      <ul className="list-group">
        {lists.map((list) => (
          <ListItem text={list.text} isDone={list.isDone} key={list.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
