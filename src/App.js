import { useState } from "react";
import React  from "react";
import axios from "axios";
import './App.css';

function App() {


  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // const url='https://api.openweathermap.org/data/2.5/weather?q={location}&units=imperial&appid=d71d66dcab75100f6a34a90c99478073'
  
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d71d66dcab75100f6a34a90c99478073`


 const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
 }
  return (
    <div className="App">

      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter Location" type="text" />
      </div>
      <div className="container">

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
        </div>

        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}&deg;F</h1> : null}
        </div>

        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        {data.name != undefined &&
          <div className="bottom">

            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}</p> : null}
              <p>Feel Like</p>
            </div>

            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>

            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>

          </div>
        }
      </div>
    </div>
  );
}

export default App;
