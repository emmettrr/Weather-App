var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var icon = document.getElementById('weatherIcon')
var forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q='
var Url = `https://api.openweathermap.org/data/2.5/weather?q=`
var city = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humid = document.getElementById('currentHumidity')
var date = document.getElementById('date')

$('#searchBtn').on('click',function(){
    fetch(Url+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)

       
        let currentIcon = `https://openweathermap.org/img/wn/ + data['weather']['icon']+ '.png`; 
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

        localStorage.setItem('previous city', input.value)
    })
    
    .catch(console.log())
})
$('#searchBtn').on('click',function(){
    fetch(forecastApi+input.value+apiKey+units)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i < 5; i++) {
            if (i === 5) { break; }
            var cityContainer = document.createElement('div')
            var cityDateContainer = document.createElement('p') 
            var tempContainer = document.createElement('p')
            var windSpeedContainer = document.createElement('p')
            var humidityContainer = document.createElement('p')
            
            cityContainer.append(cityDateContainer, tempContainer, windSpeedContainer, humidityContainer)
            cityContainer.classList.add('card')
            tempContainer.textContent = 'Temperature: F'
            windSpeedContainer.textContent = 'Wind Speed: '
            humidityContainer.textContent = 'Humidity: '
            cityDateContainer

            var tempF = data.list[i].main.temp
            tempContainer.append(tempF)

            var windSpeedF = data.list[i].wind.speed
            windSpeedContainer.append(windSpeedF)

            var humidityF = data.list[i].main.humidity
            humidityContainer.append(humidityF)

            forecastList.append(cityContainer)
        
        }
    }
    
    )})


    $('#searchBtn').on('click',function(event){
        var lastCity = localStorage.getItem('previous city')
        $('#previousSearch').prepend(`<button class="btn btn-secondary col mb-2 searchBtn">${lastCity}</button>`)
    })