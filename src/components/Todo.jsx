import React, { useState } from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import StatusBar from "./StatusBar";

const Todo = () => {
  const [lists, setList] = useState([
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
  ]);

  function createList(text) {
    const newList = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setList([...lists, newList]);
  }

  function updateCheck(id) {
    console.log(id);
    setList(
      lists.map((list) => {
        if (list.id === id) {
          list.isDone = !list.isDone;
        }
        return list;
      })
    );
  }

  function deleteList(id) {
    console.log(id);
    if (confirm("Are U sure to delete ?")) {
      setList(lists.filter((list) => list.id != id));
    }
  }

  return (
    <div className="p-3">
      <h1>Todo</h1>

      <Input createList={createList} />
      <hr />
      <StatusBar lists={lists} />
      <ul className="list-group">
        {lists.map((list) => (
          <ListItem
            updateCheck={updateCheck}
            deleteList={deleteList}
            list={list}
            key={list.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
