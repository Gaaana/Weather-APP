const dotenv=require('dotenv')
const axios=require('axios');
dotenv.config();
module.exports.home = async(req,res) => {
    res.render("home.ejs")
}

module.exports.weathercheck = async(req,res) => {
    try{
        let { city}= req.body
        let url=process.env.BASEURL + 'q=' + city + "&appid=" + process.env.APPID
        let {data} =await axios.get(url)
        console.log('Data is',data)
        console.log('RESULT',data.main.temp);
        let temperature= Math.ceil(data.main.temp - 273.15)
        res.render("weatherreport",{city,temperature}); 
    }
    catch(error){
        console.log('Error is',error.message)
    }
}
