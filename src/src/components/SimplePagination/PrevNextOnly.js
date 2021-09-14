import React, { useState, useEffect } from "react";
import axois from "axios";
import Pagination from "./Pagination";
const PrevNextOnly = () => {
  const [data, setData] = useState("");

  const [showPerPage, setshowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axois.get(
      "http://jsonplaceholder.typicode.com/todos"
    );
   setData(data);
  };
  
  const OnPagiantion = (start, end) => {
    console.log(start, end);
    setPagination({ start: start, end: end });
  };

  return (
    <div>
        <h2>Simple Pagination with counter Logic </h2>
      <ul>
        {data &&
          data.slice(pagination?.start, pagination?.end).map((data) => {
            return (
              <li>
                #{data.id}. {data.title}
              </li>
            );
          })}
      </ul>
      <Pagination showPerPage={showPerPage} OnPagiantion={OnPagiantion}  total={data?.length}/>
    </div>
  );
};

export default PrevNextOnly;
