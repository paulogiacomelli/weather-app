const rootUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '856a80d3b5963a0a9b4437f29acecf92'

export const fetchWeather = (lat, lon) => {
    const url = rootUrl+'lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+apiKey
    //console.log(url)
    return fetch(url)
    .then(res => res.json())
    .then(json => ({
        temp: json.main.temp,
        weather: json.weather[0].main
    }))
}