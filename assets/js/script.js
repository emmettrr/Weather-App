var requestURL = 'pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={ab8da6ccc8f4bdca20182da7d0619b48}'
var search = $('#searchBtn')
var locationVal = $('#location')

$search.click('click', handleSubmission)

function handleSubmission (event) {
    event.preventDefault();

    if(!location) {
        console.log('You need a search input value!');
        return;
    }

    searchApi($location.value)

}

function searchApi (locationVal) {
    if ($location.value) {
        cityUrl = 'pro.openweathermap.org/data/2.5/forecast/hourly?q=' + locationVal + '&appid={ab8da6ccc8f4bdca20182da7d0619b48}' 
    }

    fetch(requestURL)
        .then(function (response){
            if(!response.ok) {
                throw response.json();
            }
            
            return response.json();
        })
        
        .then(function (localRes) {
            var localRes = $('#searchHistory')

            locationVal.textContent = localRes.search.query;

            if (!localRes.results.length) {
                locationVal.innerHTML = '<h4>No city found, try again!</h4>';
            } else {
                localVal.textContent = '';
                for (let i = 0; i < localRes.results.length; i++) {
                    printResults(localRes.results[i]);
                    
                }
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}