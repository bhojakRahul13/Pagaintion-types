import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, OnPagiantion ,total}) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    let value = showPerPage * counter;
    OnPagiantion(value - showPerPage, value);
  }, [counter]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        style={{ padding: 20 }}
        disabled={counter === 1}
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >
        Prev
      </button>
      <button
      disabled={Math.ceil(total/showPerPage)=== counter}
        style={{ padding: 25 }}
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
