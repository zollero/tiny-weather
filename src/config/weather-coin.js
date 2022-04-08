

import sunDay from '../assets/sun-day.png'
import cloudsDay from '../assets/clouds-day.png'
import rainDay from '../assets/rain-day.png'
import windDay from '../assets/wind.png'
import snowDay from '../assets/snow-day.png'
import eleDay from '../assets/ele-day.png'

import sunNight from '../assets/sun-night.png'
import cloudsNight from '../assets/clouds-night.png'
import rainNight from '../assets/rain-night.png'
import windNight from '../assets/wind-night.png'
import snowNight from '../assets/snow-night.png'
import eleNight from '../assets/ele-night.png'


const icons = {
  '多云': {
    day: cloudsDay,
    night: cloudsNight
  },
  '晴': {
    day: sunDay,
    night: sunNight
  },
  '雨': {
    day: rainDay,
    night: rainNight
  },
  '风': {
    day: windDay,
    night: windNight
  },
  '雪': {
    day: snowDay,
    night: snowNight
  },
  '雷': {
    day: eleDay,
    night: eleNight
  }
}

function checkIsNight (time, sunrise, sunset) {
  const now = new Date()
  const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
  const sunriseTime = new Date(`${date} ${sunrise}:00`).getTime()
  const sunsetTime = new Date(`${date} ${sunset}:00`).getTime()
  const timeTime = new Date(`${date} ${time}:00`).getTime()
  if (timeTime > sunriseTime && timeTime < sunsetTime) {
    return false
  }
  return true
}


function getWeaIcon (weather) {
  const wea = weather.wea
  const isNight = checkIsNight(weather.update_time, weather.sunrise, weather.sunset)
  const dayOrNight = isNight ? 'night' : 'day'
  if (icons[wea])
    return icons[wea][dayOrNight]
  if (wea.indexOf('晴') > -1) {
    if (wea.indexOf('多云') > -1) {
      return icons['多云'][dayOrNight]
    } else if (wea.indexOf('风') > -1) {
      return icons['风'][dayOrNight]
    } else if (wea.indexOf('雨') > -1) {
      return icons['雨'][dayOrNight]
    } else if (wea.indexOf('雪') > -1) {
      return icons['雪'][dayOrNight]
    } else if (wea.indexOf('雷') > -1) {
      return icons['雷'][dayOrNight]
    }
    return icons['晴'][dayOrNight]
  } else if (wea.indexOf('多云') > -1) {
    return icons['多云'][dayOrNight]
  } else if (wea.indexOf('风')) {
    return icons['风'][dayOrNight]
  } else if (wea.indexOf('雨') > -1) {
    return icons['雨'][dayOrNight]
  } else if (wea.indexOf('雪') > -1) {
    return icons['雪'][dayOrNight]
  } else if (wea.indexOf('雷') > -1) {
    return icons['雷'][dayOrNight]
  }
  return icons['晴'][dayOrNight]
}

export default getWeaIcon