var apiKey = '2f4eb5b7c35ea26b6d2bd67436f4e25c'
var inputVal = $('#locations')
var units = '&units=imperial';
var url = `https://api.openweathermap.org/data/2.5/weather?q=`


$('#searchBtn').on('click',function(){
    fetch(url+input.value+apiKey+units)
    .then(function (response){
        console.log(response.json());
    })
})
        // .then (function(response) {
        // (data => {
        //     var temp = data['#currentTemp']
        //     var wind = data['#currentWind']
        //     var humid = data['#currentHumidity']
        //     var uv = data['#currentUV']

        //     inputVal.innerHTML = `City: ${'temp'}`
        // })
    
// })