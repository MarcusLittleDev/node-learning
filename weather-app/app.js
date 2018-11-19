// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');
request({
    url: `https://api.darksky.net/forecast/4eaa7f543c1735832641687adcf9a10b/30.493152,-90.470717`,
    json: true 
}, (error, response, body) => {
    console.log(body.currently.temperature)
})
