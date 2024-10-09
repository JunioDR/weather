/* eslint-disable react/prop-types */
import "./weatherInfo.css";

function WeatherInfo({ weather }) {
  //console.log(weather);
  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}mb</p>
      </div>
    </div>
  );
}
export default WeatherInfo;
