import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Months from './Months'
import Days from './Days'
// import continents from '../../data/continents'
// import countries from '../../data/countries'

function App() {
  return (
    <>
      <div className="title">
        <img src="/images/holiday.gif" alt=" Holiday pic" />
        <h1>Welcome to Mr Bean favourite holidays</h1>
        <img className="bean2" src="/images/holiday.gif" alt="Holiday pic" />
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/months/:name" element={<Months />} />
          <Route path="/months/:name/:code" element={<Days />} />
        </Routes>
      </div>
    </>
  )
}

export default App
