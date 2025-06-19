import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){

  const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGZhbGx8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL="https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg";

 
  return(
    <div className="InfoBox">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 
          ? RAINY_URL 
          : info.temp>15 
          ? HOT_URL 
          : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {
         info.humidity >80 
          ? <ThunderstormIcon/> 
          : info.temp>15 
          ? <SunnyIcon/> 
          : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"} >
          <p>Temperature = {info.temp}&nbsp;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max temp = {info.tempMax}</p>
          <p>The Weather is Described as <i> {info.weather}</i> feels like {info.feelsLike} C</p> 
        </Typography>
      </CardContent>
    </Card>

    </div>
  );
}