document.addEventListener("DOMContentLoaded", () => {
    let searchBtn = document.getElementById("search-btn");
    let countryInp = document.getElementById("country-inp");
    let resultDiv = document.querySelector(".result");

    searchBtn.addEventListener("click", () => {
        let countryName = countryInp.value.trim();
        if (!countryName) {
            resultDiv.innerHTML = `<p>Please enter a country name.</p>`;
            return;
        }

        let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        console.log(finalURL);
        fetch(finalURL)
            .then((response) => response.json())
            .then((data) => {
                let countryData = data[0];
                let capital = countryData.capital ? countryData.capital[0] : "N/A";
                let flag = countryData.flags ? countryData.flags.svg : "";
                let name = countryData.name ? countryData.name.common : "N/A";
                let continent = countryData.continents ? countryData.continents[0] : "N/A";
                let currency = countryData.currencies ? Object.values(countryData.currencies)[0].name : "N/A";
                let languages = countryData.languages ? Object.values(countryData.languages).join(", ") : "N/A";

                resultDiv.innerHTML = `
                    <img src="${flag}" class="flag-img">
                    <h2>${name}</h2>
                    <p><strong>Capital:</strong> ${capital}</p>
                    <p><strong>Continent:</strong> ${continent}</p>
                    <p><strong>Currency:</strong> ${currency}</p>
                    <p><strong>Languages:</strong> ${languages}</p>
                `;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                resultDiv.innerHTML = `<p>Could not fetch data. Please try again later.</p>`;
            });
    });
});
