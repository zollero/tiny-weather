
import React from 'react'
import './index.scss'

const valSizes = {
  large: 'temp-val-large',
  medium: 'temp-val-medium',
  small: 'temp-val-small',
}
const unitSizes = {
  large: 'temp-unit-large',
  medium: 'temp-unit-medium',
  small: 'temp-unit-small',
}

const TempVal = ({ temp, size }) => {

  return (
    <div className="weather-temp">
      <span className={'temp-val ' + valSizes[size]}>{temp}</span>
      <span className={'temp-unit ' + unitSizes[size]}>℃</span>
    </div>
  )
}

export default TempVal