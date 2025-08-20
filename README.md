# 🌦️ WeatherWise

**WeatherWise** is a modern, fully interactive weather application built with React, Express, and Tailwind CSS. Search by city or location, view real-time weather updates, and explore detailed 5-day forecasts — all wrapped in a beautifully animated, responsive experience.

---

## ✨ Features

* 🔍 **Search weather** by city name or current location (Geolocation)
* 🌡️ **Real-time weather:** Temperature, humidity, wind speed, and conditions (sunny, rainy, cloudy, etc.)
* 📅 **5-day weather forecast** with daily highs and lows
* 🎨 **Dynamic visuals/icons** that match current weather
* 📱 **Responsive UI** for both mobile and desktop
* 🔎 **Autocomplete/suggestion search bar**
* 🌍 **Celsius/Fahrenheit toggle**
* 📊 **Interactive forecast cards & trend charts (Chart.js)**
* ⚡ **Smooth animations & transitions**
* 🛡️ **Robust error handling & loading animations**
* 🔑 **Secure API proxy via backend** to hide API keys

---

## 🛠 Tech Stack

* **Frontend:** React (or Next.js), Tailwind CSS
* **Backend:** Node.js, Express.js
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)
* **Charts:** Chart.js

---

## 📂 Project Structure

```
WeatherWise/
├── backend/            # Express backend for API proxy and env handling
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/           # React frontend with Tailwind styling
│   ├── src/
│   │   ├── components/
│   │   │   ├── WeatherCard.js
│   │   │   ├── ForecastChart.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/WeatherWise.git
cd WeatherWise
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file inside `/backend`:

```
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

* Start the backend server:

```bash
node index.js
```

(Default: [http://localhost:5000](http://localhost:5000))

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

* Start the development server:

```bash
npm start
```

(Default: [http://localhost:3000](http://localhost:3000))

⚠️ **Note:** The backend server must be running for the frontend to fetch weather data.

---

## 🌐 Usage

* Enter a city name or use **Current Location**.
* Toggle between °C and °F.
* View **5-day forecasts** with interactive charts and weather icons.

---

## ⚠️ Error Handling

* Invalid city names → shows a user-friendly message.
* Geolocation denied → prompts for manual city entry.
* API errors → gracefully handled with alerts.

---

## 📦 Deployment

* **Frontend:** Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
* **Backend:** Deploy on [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/)

👉 Update the frontend’s `BACKEND_URL` with your deployed backend URL.

---

## 💡 Future Enhancements

* 🌙 Dark/Light mode toggle
* ⭐ Save favorite cities (local storage)
* 🕒 Hourly forecasts
* 🌍 Internationalization (multi-language support)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Credits

* [OpenWeatherMap API](https://openweathermap.org/api)
* [Tailwind CSS](https://tailwindcss.com/)
* [Chart.js](https://www.chartjs.org/)

---

✨ Stay informed with **WeatherWise** — your smart weather companion!
