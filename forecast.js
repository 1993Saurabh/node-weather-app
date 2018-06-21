const request = require('request');

const API_KEY = '8db808a656e1865ea5a01e9a751dda9c';
getForecast = (latitude, longitude, callback) => {
    let reqUrl = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`;
    console.log(reqUrl);
    request({
        url: reqUrl,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else {
            callback(undefined, body);
        }
    });
};

module.exports.getForecast = getForecast;