
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import './index.scss'

import backIcon from '../../assets/back.png'
import wind from '../../assets/wind.png'
import { getIcons } from '../../utils'

import TempVal from '../../components/temp-val'
import WeatherChart from "../../components/chart";
import WeekWeather from "../../components/week-weather";

import { SAVED_WEATHER } from '../../config/constant'
import { getWeather  } from "../../api";

const Detail = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(SAVED_WEATHER)
    if (!saved) {
      getWeather().then(weather => {
        setWeather(weather)
      })
    } else {
      setWeather(JSON.parse(saved))
    }
  }, [])

  return (
    <>
    { weather ? (
      <div className="detail-container">
        <Link to="/" replace>
          <img className="back-icon" src={backIcon} alt="返回按钮" />
        </Link>
        <img className="weather-img" src={wind} alt="天气图标" />
        <div className="detail-header">
          <p className="header-title">{weather.city}市</p>
          <TempVal temp={weather.tem} size="large" />
        </div>
  
        <div className="info-line">
          { getIcons(weather).map(v => (
            <div
              key={v.color}
              className="info-icon"
              style={{background: v.bg}}
            >
              <img
                className="icon-img"
                src={v.icon}
                alt={v.alt}
              />
              <span
                className="icon-text"
                style={{color: v.color}}
              >
                {v.val}
              </span>
            </div>
          ))}
        </div>
  
        <p className="title-text">Today</p>
  
        <WeatherChart hours={weather.hours} />
  
        <WeekWeather />
      </div>
    ) : ''}
    </>
  )
}

export default Detail