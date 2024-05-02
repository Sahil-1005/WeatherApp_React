//import { useState } from 'react'
//https://www.weatherapi.com/my/ for weatherData

import Temprature from './component/Temprature'
import Highlights from './component/Highlights'
import { useEffect, useState } from 'react'
function App() {
  const [city, setCity] = useState("Vadodara")
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=65dec8f0b81f42bf88c180819240105&q=${city}&aqi=no`
  const [weatherData, setweatherData] = useState(null)

  useEffect(()=>{
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new console.error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      setweatherData(data)
    })
    .catch((e) => {
      console.log(e)
    })
  },[city])

  return (
    <>
      <div className='bg-[#1f213a] h-screen flex justify-center align-top'>

        <div className='mt-40 w-1/5 h-1/3'>
          {weatherData && <Temprature 
          setCity={setCity}
          stats={{
            temp:weatherData.current.temp_c,
            condition:weatherData.current.condition.text,
            isDay:weatherData.current.is_day,
            location:weatherData.location.name,
            time:weatherData.location.localtime
          }}
          />}
        </div>

        <div className='mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6'>
          <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
          {weatherData && 
          (<>
          <Highlights 
          stats={{
            title:"Wind status",
            value:weatherData.current.wind_mph,
            unit:"mph",
            direction:weatherData.current.wind_dir
          }}
          />
          <Highlights 
          stats={{
            title:"Visibility",
            value:weatherData.current.vis_miles,
            unit:"miles"
          }}
          />
          <Highlights 
          stats={{
            title:"Air Pressure",
            value:weatherData.current.pressure_mb,
            unit:"mb(milibars"
          }}
          />
          <Highlights 
          stats={{
            title:"Humidity",
            value:weatherData.current.humidity,
            unit:"%"
          }}
          />
          </>
          )
          }
        </div>

      </div>
    </>
  )
}

export default App
