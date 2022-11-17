import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/days'

function Days() {
  const { code } = useParams()
  const DayData = data.find((day) => day.code === code)

  return (
    <>
      <div>
        <h2>
          {DayData.name}
          {DayData.flag}
        </h2>
        <ul>
          <li>Name: {DayData.name}</li>
          <li>Month: {DayData.month} </li>
          <li>Description {DayData.description}</li>
        </ul>
      </div>
    </>
  )
}

export default Days
