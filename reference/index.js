// fetch = function used for making HTTP requests to fetch resources.
// It returns a Promise that resolves to the Response object representing the response of the request, or rejects with a TypeError if the request could not be made.
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrive adn send data asynchronously over the web
// fetch(url, {options})

// HTTP response status codes: 
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
// Informational responses: 100 - 199
// Successful responses: 200 - 299
// Redirection messages: 300 - 399
// Client error responses: 400 - 499
// Server error responses: 500 - 599


// method 1: using fetch

// fetch("https://pokeapi.co/api/v2/pokemon/ditto") // fetch api
//     .then(response => {
//         if (!response.ok) { // if response is not ok, response not found
//             throw new Error("Could not fetch resource") // error
//         }
//         return response.json // convert response to json
//     }) // once fetched, then get the response into json format
//     .then(data => console.log(data)) // once data is formated to json, get the data 
//     .catch(error => console.error(error)); // if there is an error in the response, then print the error 

// // method 2: using async/await function
// fetchData();
// async function fetchData() {
//     try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`); 
//         }

//         const data = await response.json();
        
//         console.log(data);
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }

fetchData();
async function fetchData() {
    try {
        const input = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }

        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const displayImg = document.getElementById("pokemonImg");

        displayImg.src = pokemonSprite;
        displayImg.style.display = "block";
    } catch (error) {
        console.log('Error: ', error);
    }
}z