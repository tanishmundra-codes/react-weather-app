import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "33b30edcffafd5110b5bcf02555c8233"

    

    let generateInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temperature : jsonResponse.main.temp,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            feelsLike: jsonResponse.main.feels_like,
        }
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        let newInfo = await generateInfo();
        updateInfo(newInfo);
    }



    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>

                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                
                <Button variant="contained" type="submit">Search</Button>

            </form>
            
        </div>
    )
}
