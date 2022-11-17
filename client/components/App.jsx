import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Month from './Month'
import Country from './Country'

function App() {
  return (
    <>
      <div className="title">
        <img src="/images/holiday.gif" alt="Mr Bean" />
        <h1>Navigating popular holidays</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/months/:name" element={<Month />} />
          <Route path="/month/:name/:code" element={<Country />} />
        </Routes>
      </div>
    </>
  )
}

export default App
