
import React from "react";
import { Link } from 'react-router-dom'

import './index.scss'
import logo from '../../assets/logo.jpg'
import wind from '../../assets/wind.png'
import iconHome from '../../assets/icon-home.png'

import nounRain from '../../assets/noun-rain.png'
import nounWind from '../../assets/noun-wind.png'
import nounHumidity from '../../assets/noun-humidity.png'

const Home = () => {
  
  return (
    <div className="home-container">
      <img src={ logo } className="logo-img" alt="logo" />

      <div className="info">
        <div className="info-block">
          <img className="weather-img" src={wind} alt="weather" />
          <div className="weather">
            <p className="weather-location">杭州市，浙江省</p>
            <div className="weather-line">
              <div className="weather-line-item">
                <div className="line-top">
                  <span className="temp-no">15</span>
                  <span className="temp-unit">°C</span>
                </div>
                <div className="date-val">周日, 11.am</div>
              </div>
              <div className="weather-line-item">
                <p className="tag">强风</p>
                <p className="tag">多云</p>
              </div>
            </div>
          </div>
          <Link to="/detail">
            <div className="weather-detail-btn">
              详情
            </div>
          </Link>
        </div>

        <div className="extra-info">
          <div className="line-info">
            <img className="icon-img" src={nounRain} alt="降水量" />
            <span className="icon-text">降水量</span>
            <span className="icon-text flex-one">6%</span>
          </div>
          <div className="line-info">
            <img className="icon-img" src={nounHumidity} alt="湿度" />
            <span className="icon-text">湿度</span>
            <span className="icon-text flex-one">90%</span>
          </div>
          <div className="line-info">
            <img className="icon-img" src={nounWind} alt="风速" />
            <span className="icon-text">风速</span>
            <span className="icon-text flex-one">19km/h</span>
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
  )
}

export default Home