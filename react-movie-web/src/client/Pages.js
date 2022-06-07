import React from 'react'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SearchResult from './components/pages/searchResult'
import Favorite from './components/pages/Favorite'
import {Route, Routes, BrowserRouter} from "react-router-dom"

export default function pages() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/searched/:search" element={<SearchResult/>} />
            <Route path="/" element={<Favorite/>} />
        </Routes>
      </BrowserRouter>
    
  )
}
