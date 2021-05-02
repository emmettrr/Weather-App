var requestURL = 'pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={ab8da6ccc8f4bdca20182da7d0619b48}'
var search = $('#searchBtn')
var location = $('#location').value;

$search.click('click', handleSubmission)

function handleSubmission (event) {
    event.preventDefault();

    if(!location) {
        console.log('You need a search input value!');
        return;
    }

    searchApi($location.value)

}