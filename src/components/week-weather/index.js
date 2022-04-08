
import React, { useState, useEffect } from 'react'

import { getWeatherOfWeek } from '../../api'
import './index.scss'

const FORCAST_WEATHER = 'FORCAST_WEATHER'

const WeekWeather = () => {
  const [week, setWeek] = useState([])

  useEffect(() => {
    if (window.navigator.onLine) {
      getWeatherOfWeek().then(week => {
        setWeek(week.data)
        localStorage.setItem(FORCAST_WEATHER, JSON.stringify(week.data))
      })
    } else {
      let savedForcastInfo = localStorage.getItem(FORCAST_WEATHER)
      if (savedForcastInfo) {
        savedForcastInfo = JSON.parse(savedForcastInfo)
        setWeek(savedForcastInfo)
      }
    }
  }, [])

  return (
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
  )
}

export default WeekWeather