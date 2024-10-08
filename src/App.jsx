import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./components/weatherInfo";
import WeatherInformatiton5Days from "./components/WeatherInformatiton5Days";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5days] = useState([]);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "3d0f730b843b7f0a7edcbc1500a3c849";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const api5Days = await axios.get(url5Days);
    setWeather(apiInfo.data);
    setWeather5days(api5Days.data);

    console.log(weather);
    console.log(weather5Days);
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        placeholder="Cidade"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchCity();
        }}
      />
      <button onClick={searchCity}>Buscar</button>
      {/*Componente React*/}
      {/*se a variavel weather tiver algum valor mostra na tela*/}
      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInformatiton5Days weather5Days={weather5Days} />}

      <p>Desenvolvido por Júnio Duarte - 2024</p>
    </div>
  );
}

export default App;
