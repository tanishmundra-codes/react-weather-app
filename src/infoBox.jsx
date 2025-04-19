import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function infoBox ({info}) {

    const init_image = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
      
    return (
        
        <div className='infoBox'>
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={init_image}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature : {info.temperature}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p>Pressure : {info.pressure}</p>
          <p>The weather can be described as : {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
      
      </div>
    )
}