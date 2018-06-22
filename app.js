const yargs = require('yargs');
const forecast = require('./forecast');

const geocode = require('./geocode/geocode');
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        forecast.getForecast(results.latitude, results.longitude, (error, jsonBody) => {
            if (error) {
                console.log(error);
            } else {
                console.log(jsonBody);
            }
        });
    }
});