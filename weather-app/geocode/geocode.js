const request = require('request');

const geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address, callback);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=6qRJlLO0QLw2SkL1fYIrA7cAvQntyw9n&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to server.")
        }
        else if(body.info.statuscode !== 0){
            body.info.messages.forEach(message => {
                callback(message)
            });
        }
        else if (body.results[0].locations[0] !== undefined){
            const location = body.results[0].locations[0]
            const formattedAddress = `${location.street} ${location.adminArea5} ${location.adminArea3} ${location.postalCode} ${location.adminArea1}`
            callback(undefined, {
                address:formattedAddress,
                latitude: location.latLng.lat,
                longitude: location.latLng.lng
            })
        }
        else {
            callback("Address not found")
        }
        
    })
}

module.exports = {
    geocodeAddress,
}
