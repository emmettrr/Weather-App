var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var url = `https://api.openweathermap.org/data/2.5/weather?q=`
var name = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humid = document.getElementById('currentHumidity')


$('#searchBtn').on('click',function(){
    fetch(url+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        var currentName = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']

        name.innerHTML = `${currentName}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humid.innerHTML = `${currentHum}`
    })
        
})