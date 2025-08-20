# WeatherWise 🌤️

WeatherWise is a modern, responsive weather forecast application built with Vite and ReactJS that provides real-time weather updates with a clean, minimalist design.

## ✨ Features

- 🌍 Real-time weather updates
- 📱 Fully responsive design for desktop and mobile devices
- 📍 Location-based weather results
- 🎨 Clean and minimalist UI/UX
- ⚡ Fast performance with Vite build tool
- 🌡️ Temperature display in Celsius/Fahrenheit
- 📊 Additional weather details (humidity, wind speed, etc.)

## 🚀 Live Demo

Check out the live application here: [WeatherWise Live](https://weather-wise-orpin-one.vercel.app/)

![WeatherWise Screenshot](<img width="604" height="808" alt="image" src="https://github.com/user-attachments/assets/3bdbf799-03ce-4591-8d9e-702aaa588094" />
)

## 🛠️ Getting Started

### Prerequisites

- React.js
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weatherwise.git
   cd weatherwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Your app will be available at `http://localhost:5173/` (default Vite port).

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

To preview the production build:
```bash
npm run preview
```

## 🎯 API Integration

WeatherWise uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You'll need to:

1. Sign up for a free account at OpenWeatherMap
2. Obtain your API key
3. Add it to your environment variables as shown above

## 📁 Project Structure

```
weatherwise/
├── public/
│   └── favicon.ico
├── src/
│   ├──assets/
│   │   ├── clear.png/
│   │   ├── cloud.png/
│   │   ├── drizzle.png/
│   │   ├── humidity.png/
│   │   ├── logo.png/
│   │   ├── rain.png/
│   │   ├── search.png/
│   │   ├── snow.png/
│   │   ├── wind.png/
│   ├── components/
│   │   ├── weather.css/
│   │   ├── weather.jsx/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Favicon
To change the favicon, replace the file in the `public/` directory and update the `<link rel="icon" />` tag in `index.html`.

### Styling
The project uses SCSS for styling. Modify the files in the `src/styles/` directory to customize the appearance.

## 🤝 Contributing

We welcome contributions to WeatherWise! Please follow these steps:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the coding style guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact us.

---

*Happy coding with WeatherWise! Stay informed, rain or shine!* ☀️🌧️❄️
