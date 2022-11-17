import React from 'react'
// import Nav from './Nav'
// import Continents from '../../data/continents'
import { useParams, Link } from 'react-router-dom'

import data from '../../data/continents'

function Continent() {
  const continent = useParams().name
  return (
    <>
      <ul>
        <img src={`/images/${data[continent].image}`} alt={continent} />
        {data[continent].countries.map((country) => {
          return (
            <li key={country.code}>
              <Link to={`/continent/${country.name}/${country.code}`}>
                {country.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Continent
