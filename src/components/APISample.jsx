import React, { useEffect, useState } from "react";

const APISample = () => {

  const [, setData] = useState([]);
  
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q= +
      Innsbruck +
      &units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          
          
          setIcon(result.weather[0].icon)
          setTemp(result.main.temp)
          setSpeed(result.wind.speed)
          setHumidity(result.main.humidity)
          setDescription(result.weather[0].description)         
        });
    };
    fetchData();    
  }, []);


  return (
    <>
      <div className="mx-8 px-8 py-4 flex justify-evenly gap-2 w-fit bg-gray-300/75">
        <div className="w-1/2 pr-4">
          <h3 className="text-2xl">Our weather: </h3>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather-icon" className="text-xl-icon capitalize" />
          <h4 className="">{temp} &deg;C</h4>
        </div>
        <div className="w-1/2 pl-4 min-w-fit">
          <h4 className="text-xl">
            <span className="capitalize">wind: </span>
            {speed} km/h
          </h4>
          <h4 className="text-xl capitalize">
            <span>humidity: </span>
            {humidity} %
          </h4>
          <h4 className="text-xl capitalize">{description}</h4>
        </div>
      </div>
    </>
  );
};

export default APISample;
