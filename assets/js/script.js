const apiKey = '2f4eb5b7c35ea26b6d2bd67436f4e25c'
var search = $('#searchBtn')
const inputVal = $('#locations')
var units = '&units=imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}`

$('#searchBtn').click(function(){
    fetch(url)
    console.log(url,"hello")
        .then(response => response.json())
        .then(data => {
            var temp = data['#currentTemp']
            var wind = data['#currentWind']
            var humid = data['#currentHumidity']
            var uv = data['#currentUV']

            inputVal.innerHTML = `City: ${'temp'}`
        })
})