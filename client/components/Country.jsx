import React from 'react'

import { useParams } from 'react-router-dom'

import countries from '../../data/countries'
//import Neighbour from './Neighbour'

function Country() {
  const { name } = useParams()
  // console.log(name)
  const countryData = countries.find((element) => element.name === name)
  //console.log(countryData)

  return (
    <>
      <div>
        <h2>{countryData.name}</h2>
        <ul>
          <p>{'Area: ' + countryData.areaSqKms + ' km sq'}</p>
          <p>{'Capital: ' + countryData.capital}</p>
          <p>{'Population: ' + countryData.population}</p>
          {/* <Neighbour cList={countryData.neighbours} /> */}
          {/* <p> {'Neighbours: ' + countryData.neighbours}</p> */}
        </ul>
      </div>
    </>
  )
}

export default Country
