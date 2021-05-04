const apiKey = "2f4eb5b7c35ea26b6d2bd67436f4e25c"
var search = $('#searchBtn')
const inputVal = $('#locations').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`

search.click('click', handleSubmission)

function handleSubmission (event) {
    event.preventDefault();

    if(!inputVal) {
        console.log(inputVal);
        return;
    }
    weather();
}



function weather (location) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

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
        .catch(() => {
            msg.textContent = "Please search for a valid city!";
          });
}