import React from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import StatusBar from "./StatusBar";

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
      <StatusBar lists={lists} />
      <ul className="list-group">
        {lists.map((list) => (
          <ListItem list={list} key={list.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
