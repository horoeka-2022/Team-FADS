import React from 'react'
import Continents from '../../data/continents'
import { Link } from 'react-router-dom'

function Nav() {
  const showContinents = Object.keys(Continents)
  return (
    <div>
      <h2>Nav</h2>
      <Link to="/">Home</Link>
      <ul>
        {showContinents.map((continent) => {
          console.log(Continents[continent].image)
          return (
            <li key={continent.name}>
              <Link to={`/continents/${continent}`}>{continent}</Link>
              {/* <img src={`/images/${Continents[continent].image}`}></img> to add image if I feel like it*/}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
