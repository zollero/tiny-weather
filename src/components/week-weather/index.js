
import React, { useState, useEffect } from 'react'

import TempVal from '../temp-val'

import { getWeatherOfWeek } from '../../api'
import './index.scss'

const WeekWeather = () => {
  const [week, setWeek] = useState([])

  useEffect(() => {
    getWeatherOfWeek().then(week => {
      setWeek(week.data)
    })
  }, [])

  return (
    <>
      <div className="selected-hours">
        <TempVal temp={12} size="small" />
        <p className="hour-val">10 am</p>
      </div>
      <div className="week-forcast">
        { week.map(v => (
          <div
            className='day-line'
            key={v.date}
          >
            <p className="day-name">{v.week}</p>
            <p className="day-name">{v.wea}</p>
            {/* <img className="weather-img" src="" alt="天气图标" /> */}
            <div className="temp-range">
              <p className="temp-val">{v.tem1}</p>
              <p className="temp-val gray">{v.tem2}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WeekWeather