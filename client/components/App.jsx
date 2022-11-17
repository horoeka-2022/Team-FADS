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
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
        <h1>Welcome to the cool days worldwide</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continents/:name" element={<Months />} />
          <Route path="/continent/:name/:code" element={<Days />} />
        </Routes>
      </div>
    </>
  )
}

export default App
