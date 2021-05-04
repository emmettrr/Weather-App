var APIKey = '2f4eb5b7c35ea26b6d2bd67436f4e25c';
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

function weather (location) {
    fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?q=' + locationVal + '&appid=' + APIKey)
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