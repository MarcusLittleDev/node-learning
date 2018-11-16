const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=6qRJlLO0QLw2SkL1fYIrA7cAvQntyw9n&location=1301%20lombard%20street%20philadelphia',
    json: true
}, (error, response, body) => {
    console.log(`latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`);
})