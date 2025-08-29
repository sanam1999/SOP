import { useState, useEffect } from "react";

export default function Weather() {
    const weatherConditions = {
    "clear sky": "https://www.shutterstock.com/shutterstock/videos/8575810/thumb/11.jpg?ip=x480",
    "few clouds": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBneUySU9Ws_2yg8-TfdG0okKevNWlQdsCIn-QQymSzpABp6rJpOzEOoDQZ4TQMic59qg&usqp=CAU", 
    "scattered clouds": "https://live.staticflickr.com/2106/1909487867_de140c7eb8_b.jpg",
    "broken clouds": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLEnxTBKjtQHEXSffzwdTsAE-UwBClw6K-Q&s", 
    "light rain": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22Fgu56qQ6hi_OPvGWNK6j2W80mR4FocZOIDjf18eJCLvMSlHODIl2DXtmxDykF09hU8&usqp=CAU",
    "moderate rain": "https://www.sciline.org/climate/climate-change/torrential-rain/",
    "heavy rain": "https://i.ytimg.com/vi/r2sFmr7OgDs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCH_8PRJYDrrkE7AF5CcR9xcFQeMw",
    "thunderstorm": "https://images.newscientist.com/wp-content/uploads/2024/02/06103007/SEI_189745988.jpg",
    "snow": "https://thumbs.dreamstime.com/b/heavy-snowfall-8235324.jpg",
    "mist": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDY2xKrn_lNdmkkeRPxdtx1gZ6nmaGx6R-pw&s",
    "overcast clouds": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAh0pXEejJTTB6C2Fg7qHk60reERNoPsJ6AJnOUF6qrlADHAW5Dd68Q3ja-HhtOPhcvc&usqp=CAU",
    "other":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyk_ZPNiSaxUcqTN-f8u4UEa2IDmqVWCsafWxSRzwBMvsmjSSRL4J34mftEGuVNuO1784&usqp=CAU"
};

  const apiKey = 'dfa8cc6f32fe66fcc40887d4a1624214';

  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [input, setInput] = useState("");

  // Fetch current weather
  useEffect(() => {
    if (!country) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          setWeatherData(null);
          alert(data.message); // city not found
        }
      })
      .catch(err => console.error(err));
  }, [country]);

  // Fetch 5-day forecast
  useEffect(() => {
    if (!country) return;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === "200") {
          // Take one forecast per day (every 8th item)
          const dailyForecast = data.list.filter((_, index) => index % 8 === 0);
          setForecastData(dailyForecast);
        } else {
          setForecastData([]);
        }
      })
      .catch(err => console.error(err));
  }, [country]);
console.log(weatherData)
  return (
    <div className="relative flex min-h-screen flex-col bg-[#1a1a1a] overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          
          {/* Search Input */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#adadad] flex border-none bg-[#363636] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  placeholder="Search for a country"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] h-full placeholder:text-[#adadad] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  onKeyDown={(e) => e.key === "Enter" && setCountry(input)}
                />
              </div>
            </label>
          </div>

          {/* Current Temperature */}
          {weatherData && (
            <>
              <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                {weatherData.main.temp}°C
              </h1>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                {weatherData.weather[0].main}
              </p>
            </>
          )}

{/* Main Hero Image */}
<div className="flex justify-center  ">
  <div className="overflow-hidden rounded-lg">
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{
        width: "600px",
        height: "400px",
        backgroundImage: `url("${
          weatherData
            ? weatherConditions[weatherData.weather[0].description.toLowerCase()] || weatherConditions["other"]
            : weatherConditions["other"]
        }")`,
      }}
    ></div>
  </div>
</div>


          {/* 5-Day Forecast */}
          {forecastData.length > 0 && (
            <>
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                5-Day Forecast
              </h2>
              <div className="flex flex-wrap gap-4 px-4 py-6">
                {forecastData.map((day, idx) => (
                  <div key={idx} className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#4d4d4d] p-6">
                    <p className="text-white text-base font-medium leading-normal">
                      {new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                    <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">
                      {Math.round(day.main.temp)}°C
                    </p>
                    <p className="text-white text-base font-normal leading-normal">
                      {day.weather[0].main}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
