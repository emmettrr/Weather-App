const apiKey = '2f4eb5b7c35ea26b6d2bd67436f4e25c'
var search = $('#searchBtn')
const inputVal = $('#locations')
var units = '&units=imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}`

search.click(function weather(event){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temp = data['#currentTemp']
            var wind = data['#currentWind']
            var humid = data['#currentHumidity']
            var uv = data['#currentUV']

            inputVal.innerHTML = `City: ${'temp'}`
        })
})


function formSubmitHandler(event) {
    event.preventDefault(); 
    console.log(inputVal)
    let city = inputVal[0].value.trim();
    
    if(city) {
        getCurrentWeather(city); 
        inputVal.textContent = " "; 
    } else {
        alert("Please Enter a City")
    }
}




function weather (location) {
    
    
        
    }
//         .then(function (localRes) {
//             var localRes = $('#searchHistory')

//             inputVal.textContent = localRes.search.query;

//             if (!localRes.results.length) {
//                 inputVal.innerHTML = '<h4>No city found, try again!</h4>';
//             } else {
//                 inputVal.textContent = '';
//                 for (let i = 0; i < localRes.results.length; i++) {
//                     printResults(localRes.results[i]);
                    
//                 }
//             }
//         })
//         .catch(() => {
//             msg.textContent = "Please search for a valid city!";
//           });
// }