const key = '7d1e38fa78c170ddf046d66ae3d5c82a'
var search = $('#searchBtn')
const locationVal = $('#locations')

search.click('click', handleSubmission)

function handleSubmission (event) {
    event.preventDefault();

    if(!location) {
        console.log('You need a search input value!');
        return;
    }
    
    weather();

}

function weather (locationVal) {
    fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?q=' + locationVal + '&appid=' + key)
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