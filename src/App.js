import './App.css';
import { useState } from "react"
import Search from './components/search/search';
import Navbar from './components/search/navbar';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/search/api';
import Forecast from './components/forecast/forecast';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse})
    })
    .catch ((err) => console.log(err));

  }

  console.log(forecast)

  return (
    <div className={darkMode ? "container--dark" : "container--light"}>
      <Navbar
       darkMode = {darkMode} 
       toggleDarkMode = {toggleDarkMode}
       />
      <Search
      darkMode={darkMode} 
      onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather
      darkMode={darkMode}
      data={currentWeather}
      />}
      {forecast && <Forecast
      darkMode={darkMode}
      data={forecast}
      />}
    </div>
  );
}

export default App;
