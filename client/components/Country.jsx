import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../../data/countries'

function Country() {
  const { code } = useParams()
  const countryData = data.find((country) => country.code === code)

  const neighbours = countryData.neighbours
    ? countryData.neighbours
        .split(',')
        .map((neighbour) => data.find((country) => country.code === neighbour))
    : []

  console.log(neighbours)
  return (
    <>
      <div>
        <h2>
          {countryData.name}
          {countryData.flag}
        </h2>
        <ul>
          <li>Capital: {countryData.capital}</li>
          <li>Area: {countryData.areaSqKms} km2</li>
          <li>Population: {countryData.population}</li>
          <li>
            Currency: {countryData.currencyCode} - {countryData.currencyName}
          </li>
          <h3>
            <strong>Neighbouring Countries:</strong>
          </h3>
          {neighbours.length != 0 ? (
            neighbours.map((neighbour) => {
              return (
                <li key={neighbour.code}>
                  <Link to={`/continent/${neighbour.name}/${neighbour.code}`}>
                    {neighbour.name}
                  </Link>
                </li>
              )
            })
          ) : (
            <li>None</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Country
