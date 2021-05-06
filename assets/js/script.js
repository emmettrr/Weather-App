var apiKey = '&appid=2f4eb5b7c35ea26b6d2bd67436f4e25c'
var input = document.getElementById('locations')
var units = '&units=imperial';
var url = `https://api.openweathermap.org/data/2.5/weather?q=`


$('#searchBtn').on('click',function(){
    fetch(url+input.value+apiKey+units)
    .then(function (response){
        console.log(response.json());
        console.log(response);
    
            (data => {
            var name = data['#todayCurrentCity']
            var temp = data['#currentTemp']
            var wind = data['#currentWind']
            var humid = data['#currentHumidity']
            var uv = data['#currentUV']

            name.innerHTML = ` ${'name'}`.append(`${data.name}`)
            temp.innerHTML = ` ${'temp'}`.append(`${data.main.temp}℉`)
            wind.innerHTML = ` ${'wind'} mph`
            humid.innerHTML = ` ${'humid'}`
            uv.innerHTML = ` ${'#currentUV'}`
        }
        
        )})

    // .catch(err => alert("You need to enter a city name!"))
})