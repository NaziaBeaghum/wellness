import React from 'react'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Search'
import Filter from './Main/Filter'
import Type from './Main/Type'
import Single from './Main/Single'

const App = () => {
  return (
    <div className="app_container  ">
     
        <Header/>
        
        
        <Routes>
           <Route  path='/' element={<Main/>}/>
           <Route  path='/Search/:searchtext' element={<Search/>}/>
           <Route  path='/Filter/:data' element={<Filter/>}/>
           <Route  path='/Type/:type' element={<Type/>}/>
           <Route  path='/Single/:id' element={<Single/>}/>
        </Routes>
      
         
    </div>
  )
}

export default App