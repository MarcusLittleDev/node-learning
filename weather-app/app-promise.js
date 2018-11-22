const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    const encodedAddress = encodeURIComponent(argv.address);
    const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=6qRJlLO0QLw2SkL1fYIrA7cAvQntyw9n&location=${encodedAddress}`

    axios.get(geocodeUrl).then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }

        const location = response.data.results[0].locations[0];
        const latitude = location.latLng.lat;
        const longitude = location.latLng.lng;
        const weatherUrl = `https://api.darksky.net/forecast/4eaa7f543c1735832641687adcf9a10b/${latitude},${longitude}`;
        const formattedAddress = `${location.street} ${location.adminArea5} ${location.adminArea3} ${location.postalCode} ${location.adminArea1}`
        console.log(formattedAddress);
        return axios.get(weatherUrl);
    }).then((response) => {
        const temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}, but it feels like ${apparentTemperature}.`);
    }).catch((e) => {
        if(e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers');
        } else {
            console.log(e.message)
        }
    });