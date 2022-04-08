
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import './index.scss'

import TempVal from '../../components/temp-val'

import logo from '../../assets/app-logo.png'
import iconHome from '../../assets/icon-home.png'

import nounRain from '../../assets/noun-rain.png'
import nounWind from '../../assets/noun-wind.png'
import nounHumidity from '../../assets/noun-humidity.png'

import { getWeather  } from "../../api";
import { SAVED_WEATHER } from '../../config/constant'
import getWeaIcon from '../../config/weather-coin'

const Home = () => {
  const [live, setLive] = useState(null)

  const getWeatherInfo = async () => {
    const result = await getWeather()
    localStorage.setItem(SAVED_WEATHER, JSON.stringify(result))
    setLive(result)
  }

  useEffect(() => {
    if (window.navigator.onLine) {
      getWeatherInfo()
    } else {
      let savedInfo = localStorage.getItem(SAVED_WEATHER)
      if (savedInfo) {
        savedInfo = JSON.parse(savedInfo)
      }
      setLive(savedInfo)
    }
  }, [])
  
  return (
    <>
      { live ? (
        <div className="home-container">
          <img src={ logo } className="logo-img" alt="logo" />

          <div className="info">
            <div className="info-block">
              <img className="weather-img" src={getWeaIcon(live)} alt="weather" />
              <div className="weather">
                <p className="weather-location">{ live.city}市</p>
                <div className="weather-line">
                  <div className="weather-line-item">
                    <TempVal temp={live.tem} size="medium" />
                    <div className="date-val">{live.week}, {live.update_time}</div>
                  </div>
                  <div className="weather-line-item">
                    <p className="tag">{live.win}</p>
                    <p className="tag">{live.wea_day}</p>
                  </div>
                </div>
              </div>
              <Link to="/detail">
                <div className="weather-detail-btn">详情</div>
              </Link>
            </div>

            <div className="extra-info">
              <div className="line-info">
                <img className="icon-img" src={nounRain} alt="降水量" />
                <span className="icon-text">降水量</span>
                <span className="icon-text flex-one">--%</span>
              </div>
              <div className="line-info">
                <img className="icon-img" src={nounHumidity} alt="湿度" />
                <span className="icon-text">湿度</span>
                <span className="icon-text flex-one">{live.humidity}</span>
              </div>
              <div className="line-info">
                <img className="icon-img" src={nounWind} alt="风速" />
                <span className="icon-text">风速</span>
                <span className="icon-text flex-one">{live.win_meter}</span>
              </div>
            </div>
          </div>


          <div className="navigation-container">
            <div className="navigation-item">
              <img className="icon-img" src={iconHome} alt="icon" />
              <span className="icon-name">Home</span>
            </div>
            <div className="navigation-item">
              <img className="icon-img" src={iconHome} alt="icon" />
              <span className="icon-name">Home</span>
            </div>
            <div className="navigation-item">
              <img className="icon-img" src={iconHome} alt="icon" />
              <span className="icon-name">Home</span>
            </div>
            <div className="navigation-item">
              <img className="icon-img" src={iconHome} alt="icon" />
              <span className="icon-name">Home</span>
            </div>
          </div>
        </div>
      ) : <div>Loading...</div> }
    </>
  )
}

export default Home