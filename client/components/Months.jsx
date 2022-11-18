import React from 'react'
import data from '../../data/months'
import { useParams } from 'react-router-dom'

function Months() {
  const { name } = useParams()
  const daysList = data[name]
  console.log(name)
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {data[name].days.map((day, idx) => {
          return <li key={idx}>{day.date + ' : ' + day.day}</li>
        })}
      </ul>
    </div>
  )
}

export default Months
