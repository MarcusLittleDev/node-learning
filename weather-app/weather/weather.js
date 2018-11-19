const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/4eaa7f543c1735832641687adcf9a10b/${latitude},${longitude}`,
        json: true 
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to Forecast.io server");
        }
        else if (response.statusCode === 400) {
            callback("Unable to fetch weather.");
        }
        else if (response.statusCode === 200) {
            callback(null,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        
    })
}

module.exports = {
    getWeather,
}
