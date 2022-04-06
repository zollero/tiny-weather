

const getWeather = () => {
  return fetch('https://v0.yiketianqi.com/api?unescape=1&version=v63&appid=24821484&appsecret=68vvf7Pf&cityId=101210101').then(res => {
    return res.json()
  })
}

const getWeatherOfWeek = () => {
  return fetch('https://www.tianqiapi.com/api/?version=v1&appid=24821484&appsecret=68vvf7Pf&cityId=101210101').then(res => {
    return res.json()
  })
}

export {
  getWeather,
  getWeatherOfWeek
}