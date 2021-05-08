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
var previous = document.getElementById('previousSearch').value

$('#searchBtn').on('click',function(test){
    fetch(Url+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)

       
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png' 
        var currentDate = moment().format('MMMM Do YYYY')
        var currentCity = data['name']
        var currentTemp = data['main']['temp']
        var currentWind = data['wind']['speed']
        var currentHum = data['main']['humidity']

        city.innerHTML = `${currentCity}`
        temp.innerHTML = `${currentTemp}` + ' F'
        wind.innerHTML = `${currentWind}`
        humid.innerHTML = `${currentHum}`
        date.innerHTML = `${currentDate}`
        currentPic.src = weatherIcon

        localStorage.setItem('previous city', input.value)
    })
    
    .catch(console.log())
})
$('#searchBtn').on('click',function(fiveDay){
    fetch(forecastApi+input.value+apiKey+units)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        $('#forecastList').empty();
        for (let i = 4; i < 40; i+=8) {
            
            var cityContainer = document.createElement('div')
            var cityDateContainer = document.createElement('p') 
            var tempContainer = document.createElement('p')
            var windSpeedContainer = document.createElement('p')
            var humidityContainer = document.createElement('p')
            var weatherIconContainer = document.createElement('img')
            
            cityContainer.append(cityDateContainer, weatherIconContainer, tempContainer, windSpeedContainer, humidityContainer)
            cityContainer.classList.add('card')
            tempContainer.textContent = 'Temperature:'
            windSpeedContainer.textContent = 'Wind Speed: '
            humidityContainer.textContent = 'Humidity: '
            cityDateContainer


            var weatherIcon = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png'
            weatherIconContainer.src = weatherIcon

            var tempF = data.list[i].main.temp
            tempContainer.append(tempF + ' F')

            var windSpeedF = data.list[i].wind.speed
            windSpeedContainer.append(windSpeedF)

            var humidityF = data.list[i].main.humidity
            humidityContainer.append(humidityF)

            forecastList.append(cityContainer)

            var cityDate = data.list[i].dt_txt
            cityDateContainer.append(cityDate)
        }
        var lastCity = localStorage.getItem('previous city')
        $('#previousSearch').prepend(`<button class="btn btn-secondary col mb-2 searchBtn">${lastCity}</button>`)
        
        document.querySelectorAll('.some-class').forEach(item => {
            item.addEventListener('click', event => {
              //handle click
})

})
})
})