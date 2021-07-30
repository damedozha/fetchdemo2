console.log("Welcome Dame")
//Grabbing elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const countryDiv = document.querySelector(".country-data");
//Fetching data
button.addEventListener("click", function(){

    const country = input.value.trim();

    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) =>  response.json())
        .then((data) => {
            const countryData = data[0];
            console.log(countryData);
            
            // fetch(``)
            
            // const flagImage = document.createElement("img")
            // flagImage.src = countryData.flag
            // flagImage.classList.add("flag")
            // document.body.append(flagImage)     

            
            
            
            const html = 
            `
             <h2>${countryData.name}</h2>
                    <img src="${countryData.flag}" alt="flag of ${countryData.name}" title="flag of ${countryData.name}" class="flag">
                    <h3>${countryData.region}</h3>
                    <h4>Capital: ${countryData.capital}</h4>
                    <h4>Population: ${countryData.population} people</h4> 
                    `
                console.log(html)
                
                countryDiv.innerHTML = html;
                
        });
    });
