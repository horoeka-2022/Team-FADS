import React from 'react'
import { useParams, Link } from 'react-router-dom'

import data from '../../data/months'

function Month() {
  const month = useParams().name
  return (
    <>
      <ul>
        <img src={`/images/${data[month].image}`} alt={month} />
        {data[month].countries.map((country) => {
          return (
            <li key={country.code}>
              <Link to={`/month/${country.name}/${country.code}`}>
                {country.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Month
