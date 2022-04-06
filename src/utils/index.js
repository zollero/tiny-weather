


import filledRain from '../assets/filled-rain.png'
import filledWind from '../assets/filled-wind.png'
import filledHumidity from '../assets/filled-humidity.png'

const getIcons = (weather) => {
  const icons = [{
    icon: filledRain,
    alt: '降水量',
    val: weather.rain || '--',
    color: '#658ED9',
    bg: 'rgba(101, 142, 217, 0.1)'
  }, {
    icon: filledHumidity,
    alt: '湿度',
    val: weather.humidity,
    color: '#D86191',
    bg: 'rgba(216, 97, 145, 0.1)'
  }, {
    icon: filledWind,
    alt: '风速',
    val: weather.win_meter,
    color: '#5E4FC1',
    bg: 'rgba(94, 79, 193, 0.1)'
  }]
  return icons
}


export {
  getIcons
}