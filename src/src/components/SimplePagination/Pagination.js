import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({ showPerPage, OnPagiantion, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButton, setNumberOfButton] = useState();

  useEffect(() => {
    setNumberOfButton(Math.ceil(total/showPerPage));
  }, [total])

  useEffect(() => {
    let value = showPerPage * counter;
    OnPagiantion(value - showPerPage, value);
  }, [counter]);

  const ButtonClick = (type) => {
    console.log(type);
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButton === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button style={{ padding: 20 }} onClick={() => ButtonClick("prev")}>
        Prev
      </button>
      <ul style={{display:"flex"}} >
       
      {
        new Array(numberOfButton).fill("").map((el,index)=>{
          return  <li  onClick={()=>setCounter(index +1 )} className={`${index + 1 === counter && "active"}`} style={{cursor:"pointer",margin:"0 2px",padding:"0 15px",border:"1px solid white"}}>
          {index + 1}
        </li>
        })
      } 
      </ul>
      <button onClick={() => ButtonClick("next")} style={{ marginLeft:"20px",padding: 25 }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
