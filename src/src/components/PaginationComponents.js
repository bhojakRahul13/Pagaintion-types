import React, { useState, useEffect } from "react";
import "./styles.css";

const PaginationComponents = () => {
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberList, setMaxPageNumberList] = useState(5);
  const [minPageNumberList, setMinPageNumberList] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemPerPage; //1*5 = 5
  const indexFirstItem = indexOfLastItem - itemPerPage; // 5= 5 = 0
  const currentItem = data.slice(indexFirstItem, indexOfLastItem); //200(0,5)

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberList) {
      //curretnt +1  greater than 5
      setMaxPageNumberList(maxPageNumberList + pageNumberLimit);
      setMinPageNumberList(minPageNumberList + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberList(maxPageNumberList - pageNumberLimit);
      setMinPageNumberList(minPageNumberList - pageNumberLimit);
    }
  };

  const handleLoadMore=()=>{
      setItemPerPage(itemPerPage +5);   
  }

  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberList) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberList >=1) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
  }

   
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberList + 1 && number > minPageNumberList) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number && "active"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const renderData = (data) => {
    return (
      <ul>
        {data &&
          data.map((todo, index) => {
            return <li key={index}>{todo.id} {todo.title}</li>;
          })}
      </ul>
    );
  };

  return (
    <>
      <h1>Todo List</h1>
      {renderData(currentItem)}
      <ul className="pageNumbers">
        <li>
          <button disabled={currentPage == pages[0]?true : false} onClick={handlePrevBtn}>Prev</button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button disabled={currentPage == pages[pages.length - 1]?true : false} onClick={handleNextBtn}>Next</button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadMore">
          Load More
      </button>

    </>
  );
};

export default PaginationComponents;
