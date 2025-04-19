
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import { useState } from 'react'

export default function Weatherapp () {

    let [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            temperature : "25",
            humidity: "38",
            pressure: "1006",
            feelsLike: "29.13",
        }
    )

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}