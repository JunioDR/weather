/* eslint-disable react/prop-types */
function WeatherInfo({ weather }) {
  console.log(weather);
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      />
      <p>{weather.weather[0].description}</p>
      <div>
        <p>Sensação térmica: {weather.main.feels_like}</p>
      </div>
      <div>
        <p>Umidade: {weather.main.humidity}</p>
      </div>
      <div>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}
export default WeatherInfo;
