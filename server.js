const express = require('express');
const dotenv=require('dotenv')
dotenv.config();
const port=process.env.PORT || 5000
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true})) 
const WeatherRoutes = require('./src/route/weather.route');
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(WeatherRoutes);
app.listen(port, () =>
{
    console.log(`server is running at ${port}`);
})

