import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./components/weatherInfo";
//import Weatherdays from "./components/weatherdays";

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "3d0f730b843b7f0a7edcbc1500a3c849";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div>
        <h1 className="text-red-400 flex-1 text-center">Previsão do Tempo</h1>
        <input
          type="text"
          placeholder="Cidade"
          className=" px-2 p-2 rounded-s"
          ref={inputRef}
        />
        <button
          onClick={searchCity}
          className="px-2 p-2 bg-green-500 outline-slate-400 rounded-e"
        >
          Buscar
        </button>
        <WeatherInfo weather={weather} />
        {/*<! <Weatherdays /> */}
      </div>
    </div>
  );
}

export default App;
