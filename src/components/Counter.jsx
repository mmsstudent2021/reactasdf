import React, { useState } from "react";

function Counter({ start, increaseCount, decreaseCount }) {
  // useState hook

  return (
    <div className="d-flex align-items-center border m-3 p-3 rounded j">
      <h1 className=" me-auto mb-0"> Counter : {start} </h1>
      <button onClick={decreaseCount} className="btn btn-primary me-2">
        -
      </button>
      <button onClick={increaseCount} className="btn btn-primary">
        +
      </button>
    </div>
  );
}

export default Counter;
