import React, { useState } from "react";

function Counter() {
  // useState hook
  const [count, setCount] = useState(0);

  const substract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center border m-3 p-3 rounded j">
      <h1 className=" me-auto mb-0"> Counter : {count} </h1>
      <button onClick={substract} className="btn btn-primary me-2">
        -
      </button>
      <button onClick={(_) => setCount(count + 1)} className="btn btn-primary">
        +
      </button>
    </div>
  );
}

export default Counter;
