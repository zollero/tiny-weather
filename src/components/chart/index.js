
import { Canvas, Chart, Line, Axis, Area } from '@antv/f2';
import React, { useEffect } from 'react';
import './index.scss'

import TempVal from '../temp-val'


const createChart = (data) => {
  const scale = {
    hours: {
      range: [0, 1],
    }
  };
  const context = document.getElementById('chartRef').getContext('2d');
  const LineChart = (
    <Canvas context={context} pixelRatio={window.devicePixelRatio}>
      <Chart data={data} scale={scale}>
        <Axis
          field="hours"
          style={{
            label: {
              align: 'between',
              fontSize: '14'
            },
            labelOffset: 10
          }}
        />
        <Area x="hours" y="tem" color="rgba(233, 201, 57, 1)" shape="smooth" />
        <Line x="hours" y="tem" shape="smooth" color="#E9C939" />
      </Chart>
    </Canvas>
  );

  const chart = new Canvas(LineChart.props);
  chart.render();
}


const WeatherChart = ({hours}) => {
  console.log(hours)

  useEffect(() => {
    createChart(hours)
  }, [hours])


  return (
    <>
      <div className="detail-content">
        <canvas id="chartRef" className="chart-container" />
      </div>
      <div className="week-weather-container">
        { hours.slice(0, 3).map(v => (
          <div
            className="selected-hours"
            key={v.date}
          >
            <TempVal temp={v.tem} size="small" />
            <p className="hour-val">{v.hours}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default WeatherChart;
