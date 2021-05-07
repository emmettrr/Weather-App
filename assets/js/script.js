var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var icon = document.getElementById('weatherIcon')
var Url = `https://api.openweathermap.org/data/2.5/weather?q=`
var fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?q=`
var city = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humid = document.getElementById('currentHumidity')
var date = document.getElementById('date')
var cityOne = document.getElementById('dayOne')
var dayTwo = document.getElementById('dayTwo')
var dayThree = document.getElementById('dayThree')
var dayFour = document.getElementById('dayFour')
var dayFive = document.getElementById('dayFive')
var dateOne = document.getElementById('dateOne')
var tempre = document.getElementById('tempOne')

$('#searchBtn').on('click',function(){
    fetch(Url+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // var icon = data['weather']['icon']
        // let currentIcon = `https://openweathermap.org/img/wn/${icon}.png`; 
        var currentDate = moment().format('MMMM Do YYYY')
        var currentCity = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']

        // icon.innerHTML = `${currentIcon}`
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
        var dayOne = data['city']['name']
        var tempER = data['list'][1]['main']['temp']
        var currentWind = data['list'][1]['wind']['speed']
        var currentHum = data['list'][1]['main']['humidity']

        cityOne.innerHTML = `${dayOne}`
        tempre.innerHTML = `${tempER}`
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