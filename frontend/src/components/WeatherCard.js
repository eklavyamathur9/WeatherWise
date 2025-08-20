import React from 'react';
const WeatherCard = ({ weather, toggleTempUnit, tempUnit }) => {
  // Helper: dynamic background, icons, etc.
  const getBg = (condition) => {
    switch (condition) {
      case 'Clear':
        return 'bg-gradient-to-r from-blue-400 to-yellow-200';
      case 'Rain':
        return 'bg-gradient-to-r from-gray-400 to-blue-700';
      case 'Snow':
        return 'bg-gradient-to-r from-blue-100 to-white';
      default:
        return 'bg-gradient-to-r from-gray-300 to-gray-500';
    }
  };
  return (
    <div className={`rounded-lg shadow-md p-4 ${getBg(weather.weather[0].main)}`}>
      <div className="flex items-center">
        <img src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
             alt="weather icon" className="w-16" />
        <div>
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p>{weather.weather.description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-4xl">{tempUnit === 'C'
          ? `${weather.main.temp}°C`
          : `${(weather.main.temp * 9/5 + 32).toFixed(1)}°F`}</span>
        <button
          className="p-2 bg-white rounded shadow hover:bg-gray-100"
          onClick={toggleTempUnit}
        >Toggle °C/°F</button>
      </div>
      <div className="flex justify-between mt-2">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>Wind: {weather.wind.speed} m/s</span>
      </div>
    </div>
  );
};
export default WeatherCard;
