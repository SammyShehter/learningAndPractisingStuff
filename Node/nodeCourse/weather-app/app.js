const request = require('postman-request')

const url =
    'http://api.weatherstack.com/current?access_key=08def42b45ac86611772ffb6ddb783d9&query=32.08227, 34.81065'

request.get({ url, json: true }, (error, response) => {
    const {temperature, feelslike} = response.body.current
    console.log(`It's ${temperature} degrees outside, but feels like ${feelslike} degrees`)
})
  