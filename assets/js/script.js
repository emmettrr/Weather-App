var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var icon = document.getElementById('weatherIcon')
var fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?q=`
var city = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humid = document.getElementById('currentHumidity')
var date = document.getElementById('date')
var dayOne = document.getElementById('dayOne')
var dayTwo = document.getElementById('dayTwo')
var dayThree = document.getElementById('dayThree')
var dayFour = document.getElementById('dayFour')
var dayFive = document.getElementById('dayFive')
var dateOne = document.getElementById('dateOne')

$('#searchBtn').on('click',function(){
    fetch(fiveUrl+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        var currentDate = moment().format('MMMM Do YYYY')
        var currentIcon = "http://openweathermap.org/img/w/" + data['list'][0]['weather'][0]['icon'] + ".png"
        var currentCity = data['city']['name']
        var currentTemp = data['list'][0]['main']['temp']
        var currentWind = data['list'][0]['wind']['speed']
        var currentHum = data['list'][0]['main']['humidity']

        icon.innerHTML = `${currentIcon}`
        city.innerHTML = `${currentCity}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humid.innerHTML = `${currentHum}`
        date.innerHTML = `${currentDate}`
    })
    
    .catch(console.log())
})

    $('#searchBtn').on('click', function(five){
        fetch(fiveUrl + input.value + apiKey + units)
        .then(response => response.json())
        .then(data => {
        var currentName = data['city']['name']
        var currentTemp = data['list'][0]['main']['temp']
        var currentWind = data['list'][0]['wind']['speed']
        var currentHum = data['list'][0]['main']['humidity']

        name.innerHTML = `${currentName}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humid.innerHTML = `${currentHum}`
        })

    })


    // for (let i = 0; -1 < i < 5; i++) {
    //     var currentName = data['city']['name']
    //     var currentTemp = data['list'][i]['main']['temp']
    //     var currentWind = data['list'][i]['wind']['speed']
    //     var currentHum = data['list'][i]['main']['humidity']
    
    //     name.innerHTML = `${currentName}`
    //     temp.innerHTML = `${currentTemp}`
    //     wind.innerHTML = `${currentWind}`
    //     humid.innerHTML = `${currentHum}`