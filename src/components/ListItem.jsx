import React from "react";

const ListItem = ({ text, isDone }) => {
  // console.log(props);
  const x = isDone ? "text-decoration-line-through" : "";
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <input
          onChange={() => console.log("change")}
          type="checkbox"
          checked={isDone}
          className="form-check-input me-2"
        />
        <span className={` ${x} fw-bold`}>{text}</span>
        <button className="btn btn-sm btn-danger ms-auto">del</button>
      </div>
    </li>
  );
};

export default ListItem;
