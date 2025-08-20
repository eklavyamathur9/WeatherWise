import { Line } from 'react-chartjs-2';
import React from 'react';

const ForecastChart = ({ forecast }) => {
  const dates = forecast.list.map(item =>
    new Date(item.dt * 1000).toLocaleDateString());
  const temps = forecast.list.map(item => item.main.temp);

  const data = {
    labels: dates,
    datasets: [
      { label: 'Temperature (°C)', data: temps, fill: false, borderColor: 'blue' }
    ]
  };
  return <Line data={data} />;
};
export default ForecastChart;
