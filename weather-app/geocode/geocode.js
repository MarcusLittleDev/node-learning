const request = require('request');

const geocode = (address) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=6qRJlLO0QLw2SkL1fYIrA7cAvQntyw9n&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log("Unable to connect to server.")
        }
        else if(body.info.statuscode !== 0){
            body.info.messages.forEach(message => {
                console.log(message)
            });
        }
        else if (body.results[0].locations[0] !== undefined){
            console.log(`Address: ${address}`)
            console.log(`latitude: ${body.results[0].locations[0].latLng.lat}`);
            console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`);
        }
        else {
            console.log("Address not found")
        }
        
    })
}

module.exports = {
    geocode,
}
