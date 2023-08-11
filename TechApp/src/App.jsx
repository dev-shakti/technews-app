import react, { useState } from 'react'
import Pagination from "./components/Pagination"
import Search from './components/Search'
import ShowNews from './components/ShowNews'
import "./app.css"
import Header from './components/Header'


function App() {

  
  return (
    <div className='app'>
      <Header/>
      <Search/>
      <Pagination/>
      <ShowNews/>
    </div>
  )
}



export default App
