import React from "react";

const ListItem = ({ list, updateCheck, deleteList }) => {
  // console.log(props);
  const x = list.isDone ? "text-decoration-line-through" : "";
  return (
    <li className="list-group-item slide-down">
      <div className="d-flex align-items-center">
        <input
          onChange={() => updateCheck(list.id)}
          type="checkbox"
          checked={list.isDone}
          className="form-check-input me-2"
        />
        <span className={` ${x} fw-bold`}>{list.text}</span>
        <button
          onClick={(_) => deleteList(list.id)}
          className="btn btn-sm btn-danger ms-auto"
        >
          del
        </button>
      </div>
    </li>
  );
};

export default ListItem;
