console.log("Welcome Dame")
//Grabbing elements
let input = document.querySelector("input")
let button = document.querySelector("button")
let countryDiv = document.querySelector("country-div")

//Fetching data

button.addEventListener("click", function(){

    const country = input.value.trim();

    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) =>  response.json())
        .then((data) => {
            const countryData = data[0];
            console.log(countryData)
            const flagImage = document.createElement("img")
            flagImage.src = countryData.flag
            flagImage.classList.add("flag")
            document.body.append(flagImage)     
            
        });

});
