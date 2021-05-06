var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?q=`
var name = document.getElementById('currentCity')
var temp = document.getElementById('currentTemp')
var wind = document.getElementById('currentWind')
var humid = document.getElementById('currentHumidity')
var date = document.getElementById('date')


$('#searchBtn').on('click',function(){
    fetch(fiveUrl+input.value+apiKey+units)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        var currentName = data['city']['name']
        var currentTemp = data['list'][0]['main']['temp']
        var currentWind = data['list'][0]['wind']['speed']
        var currentHum = data['list'][0]['main']['humidity']

        name.innerHTML = `${currentName}`
        temp.innerHTML = `${currentTemp}`
        wind.innerHTML = `${currentWind}`
        humid.innerHTML = `${currentHum}`
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