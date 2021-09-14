import React from 'react'
import PaginationComponents from './components/PaginationComponents'
import './App.css';
import PrevNextOnly from './components/SimplePagination/PrevNextOnly';
const App = () => {
  return (
    <div className="App">
    <div className="App-header">
      <PrevNextOnly/>
    </div>
    </div>
  )
}

export default App
