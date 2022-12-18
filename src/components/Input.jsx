import React, { useRef } from "react";

const Input = ({ createList }) => {
  const inputText = useRef();
  const showAlert = () => {
    createList(inputText.current.value);
    inputText.current.value = "";
  };

  // select input => docu.asldkfjlkasdjf
  // input.value
  // event onclick => alert(input.value)
  //hook
  //ref

  return (
    <div className="row g-2">
      <div className="col-8">
        <input ref={inputText} type="text" className="form-control" />
      </div>
      <div className="col-4">
        <button onClick={showAlert} className="btn btn-primary w-100">
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
