/* eslint-disable react/prop-types */
import "./weatherInformatiton5Days.css";

function WeatherInformatiton5Days({ weather5Days }) {
  // Verifica se a lista de previsões está disponível
  if (!weather5Days || !weather5Days.list) {
    return <div>Carregando previsões...</div>;
  }

  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    // Verifica corretamente se já existe a chave "date" no objeto dailyForecast
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);
  console.log(next5DaysForecast);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Previsão para 5 dias:</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div className="weather-item" key={forecast.dt}>
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="forecast-description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)}°C Min /{" "}
              {Math.round(forecast.main.temp_max)}°C Máx
            </p>
            {/*<p>{Math.round(dailyForecast[date].main.temp)}°C</p>*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformatiton5Days;

/*
function WeatherInformatiton5Days({ weather5Days }) {
  console.log({ weather5Days });

  let dailyForecast = {};

  for (let forecast of weather5Days) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    console.log(date);

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  return (
    <div>
      <p>5 days</p>
      <p></p>
    </div>
  );
}
export default WeatherInformatiton5Days;
*/
