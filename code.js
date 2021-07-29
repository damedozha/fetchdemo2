console.log("Welcome Dame")
//Grabbing elements
let input = document.querySelector("input")
let button = document.querySelector("button")
let countryDiv = document.querySelector("country-div")

//Fetching data

button.addEventListener("click", function(){
    fetch("https://restcountries.eu/rest/v2/name/usa")
    fetch("https://restcountries.eu/rest/v2/name/britain")
    fetch("https://restcountries.eu/rest/v2/name/ivorycoast")
    fetch("https://restcountries.eu/rest/v2/name/japan")
    fetch("https://restcountries.eu/rest/v2/name/uganda")
    fetch("https://restcountries.eu/rest/v2/name/ghana")
    fetch("https://restcountries.eu/rest/v2/name/southafrica")
    .then((response) =>  response.json())
        .then((data) => console.log(data));

});
