import axios from "axios"
import { useEffect, useState } from "react"
import { usePosition } from 'use-position';
import HavaDurumu from "./components/HavaDurumu";
const App = () =>{
    const [weather,setWeather]=useState()
    const {latitude,longitude} = usePosition();
    
    const getWeatherData= async (lat,lon) => {
        const key = process.env.REACT_APP_WEATHER_API_KEY
        try{
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
        setWeather(data);
        }catch{
            alert("veri alınamadı")
        }
    }
    
    useEffect(()=>{
        latitude && longitude && getWeatherData(latitude,longitude);
    },[latitude,longitude])

    return <div>
        <h2>Hava Durumu</h2>
        <HavaDurumu weather={weather}/>
        </div>
}

export default App