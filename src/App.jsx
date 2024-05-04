//import { useState } from 'react'
//https://www.weatherapi.com/my/ for weatherData
import React from 'react';
import Temprature from './component/Temprature'
import Highlights from './component/Highlights'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { List } from './component/List';
import BasicCard from './component/BasicCard';

function App() {
  const [city, setCity] = useState("Vadodara")
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=65dec8f0b81f42bf88c180819240105&q=${city}&aqi=yes`
  const [weatherData, setweatherData] = useState(null)


  useEffect(() => {
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
  }, [city])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          color: "#f5f5f5",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
      ),
  };

  return (
    <>
      <div className='bg-[#1f213a] h-screen flex justify-center align-top'>

        <div className='mt-20 w-1/5 h-1/3'>
          {weatherData && <Temprature
            setCity={setCity}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
              region: weatherData.location.region,
              conditionIcon: weatherData.current.condition.icon
            }}
          />}
        </div>

        <div className='mt-10 w-1/3 h-1/2 p-10 grid grid-cols-2 gap-6'>
          <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
          {weatherData &&
            (<>
              <Highlights
                stats={{
                  title: "Wind status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir
                }}
              />
              <Highlights
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles"
                }}
              />
              <Highlights
                stats={{
                  title: "Air Quality in pm10",
                  value:weatherData.current.air_quality.pm10,
                  quality:"poor"
                }}
              />
              <Highlights
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%"
                }}
              />
            </>
            )
          }
         {/* <Slider {...settings}>
            {List.map((item,index)=>{
              return(
                <React.Fragment key={index}>
                  <BasicCard item={item}/>
                </React.Fragment>
              )
            })}
          </Slider> */}
          <span style={{color:"white",marginLeft:"10px",marginTop:"20px"}}>Few More Highlights</span>
          <div style={{marginRight:"10px"}}>
          {weatherData &&(<>
          <Slider {...settings}>
            <BasicCard 
            stats={{
              title:"UV",
              value: weatherData.current.uv,
              unit: "nm"
            }}
            />
            <BasicCard 
            stats={{
              title:"Wind Speed",
              value: weatherData.current.wind_kph,
              unit:"kmph"
            }}
            />
            <BasicCard 
            stats={{
              title:"Temp in °F",
              value: weatherData.current.temp_f,
              unit:"°F"
            }}
            />
            <BasicCard 
            stats={{
              title:"Air Pressure",
              value: weatherData.current.pressure_mb,
              unit:"mb"
            }}
            />
          </Slider>
          </>)
          }
          
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
