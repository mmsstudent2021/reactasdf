import React, { useState } from "react";

function ShowName() {
  const [show, setShow] = useState(false);

  return (
    <div className="m-3">
      {show && <h1>Hein Htet Zan</h1>}
      <button onClick={() => setShow(!show)} className="btn btn-primary">
        {show ? "Hide" : "Show"} My Name
      </button>
    </div>
  );
}

export default ShowName;
