// D:\GEN AI\Weather\backend\index.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Current Weather
app.get('/api/weather', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${OPENWEATHER_API_KEY}&units=metric`;
    if (city) url += `&q=${city}`;
    else if (lat && lon) url += `&lat=${lat}&lon=${lon}`;
    else return res.status(400).json({ error: 'Missing location params' });
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5-day Forecast
app.get('/api/forecast', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHER_API_KEY}&units=metric`;
    if (city) url += `&q=${city}`;
    else if (lat && lon) url += `&lat=${lat}&lon=${lon}`;
    else return res.status(400).json({ error: 'Missing location params' });
    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
