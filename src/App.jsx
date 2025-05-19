import { useState } from 'react';

const API_KEY = // Replace with your OpenWeatherMap API key;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error('エラーが発生しました。', err);
    }
  };

  return (
    <div>
      <h1>天気アプリ</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を入力（例：Tokyo）"
      />
      <button onClick={handleSearch}>検索</button>

      {weather && weather.main && (
        <div>
          <h2>{weather.name} の天気</h2>
          <p>🌡️ 温度: {weather.main.temp}℃</p>
          <p>☁️ 天気: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
