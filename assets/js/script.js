const apiKey = '2f4eb5b7c35ea26b6d2bd67436f4e25c';
var search = $('#searchBtn')
const inputVal = $('#locations')

search.click('click', handleSubmission)

function handleSubmission (event) {
    event.preventDefault();

    if(!inputVal) {
        console.log('You need a search input value!');
        return;
    }
    weather();
}

function weather (location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`)
        .then(function (response){
            if(!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        
        .then(function (localRes) {
            var localRes = $('#searchHistory')

            inputVal.textContent = localRes.search.query;

            if (!localRes.results.length) {
                inputVal.innerHTML = '<h4>No city found, try again!</h4>';
            } else {
                inputVal.textContent = '';
                for (let i = 0; i < localRes.results.length; i++) {
                    printResults(localRes.results[i]);
                    
                }
            }
        })
        .catch(function (error) {
            console.log(error)
        })
}