import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import ForecastChart from '../components/ForecastChart';

const BACKEND_URL = 'http://localhost:5000'; // Change on deploy!

const App = () => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tempUnit, setTempUnit] = useState('C');
  const [error, setError] = useState('');

  // Geolocation API
  const getCurrentLocationWeather = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(`${BACKEND_URL}/api/weather?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setWeather(data);
          const forecastRes = await fetch(`${BACKEND_URL}/api/forecast?lat=${latitude}&lon=${longitude}`);
          setForecast(await forecastRes.json());
        } catch (err) {
          setError('Could not fetch weather for location.');
        }
        setLoading(false);
      },
      () => {
        setError('Location access denied.');
        setLoading(false);
      }
    );
  };

  // Search submit
  const fetchCityWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/api/weather?city=${city}`);
      const data = await res.json();
      if (!data || data.cod !== 200) throw new Error(data.message || 'Invalid city');
      setWeather(data);
      const forecastRes = await fetch(`${BACKEND_URL}/api/forecast?city=${city}`);
      setForecast(await forecastRes.json());
    } catch (err) {
      setError('City not found!');
    }
    setLoading(false);
  };

  // Autocomplete (sample, replace with real API or local city list)
  useEffect(() => {
    if (city.length > 2) {
      // Fetch autocompleteCities from API or filter local list
      // setAutocompleteCities([...]);
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 to-gray-200 flex flex-col items-center">
      <header className="p-4 text-2xl font-bold">Weather App</header>
      <div className="flex mt-4 gap-2">
        <input value={city} onChange={e => setCity(e.target.value)}
               placeholder="Enter city name"
               className="px-2 py-1 rounded border" />
        <button onClick={fetchCityWeather} className="bg-blue-400 text-white px-4 py-1 rounded">Search</button>
        <button onClick={getCurrentLocationWeather} className="bg-green-400 text-white px-4 py-1 rounded">Current Location</button>
      </div>
      {autocompleteCities.length > 0 && (
        <ul className="bg-white shadow rounded py-1 absolute">
          {autocompleteCities.map(cty => (
            <li onClick={() => setCity(cty)} key={cty} className="px-2 py-1 hover:bg-blue-100 cursor-pointer">{cty}</li>
          ))}
        </ul>
      )}
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {loading && <div className="mt-4 animate-pulse">Loading...</div>}
      {weather && <WeatherCard weather={weather} tempUnit={tempUnit} toggleTempUnit={() => setTempUnit(tempUnit === 'C' ? 'F' : 'C')} />}
      {forecast && <div className="mt-4 w-full max-w-xl"><ForecastChart forecast={forecast} /></div>}
    </div>
  );
};

export default App;
