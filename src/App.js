import React from 'react'
import PaginationComponents from './components/PaginationComponents'
import './App.css';
import PrevNextOnly from './components/SimplePagination/PrevNextOnly';
import Pagination from './components/SimplePagination/Pagination';
const App = () => {
  return (
    <div className="App">
    <div className="App-header">
      {/* <PaginationComponents/> */}
      <PrevNextOnly/>
    </div>
    </div>
  )
}

export default App
