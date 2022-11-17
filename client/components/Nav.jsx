import React from 'react'
import Months from '../../data/months'
import { Link } from 'react-router-dom'

function Nav() {
  const showMonths = Object.keys(Months)
  return (
    <div>
      <h2>Nav</h2>
      <Link to="/">Home</Link>
      <ul>
        {showMonths.map((month) => {
          console.log(Months[month].image)
          return (
            <li key={month.name}>
              <Link to={`/months/${month}`}>{month}</Link>
              {/* <img src={`/images/${Months[month].image}`}></img> to add image if I feel like it*/}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
