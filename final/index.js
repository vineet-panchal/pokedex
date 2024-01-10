
fetchData(); // call fetch data function
async function fetchData() { // async function to handle api requests
    try {
        const input = document.getElementById("pokemonName").value.toLowerCase(); // get input from user
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`); // fetch data from api according to user's input
        

        if (!response.ok) { // if user entered an error
            throw new Error(`HTTP error! status: ${response.status}`); // show error on console
        }

        const data = await response.json(); // get data from api in json format
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const displayImg = document.getElementById("pokemonImg");
        const nameTxt = document.getElementById("name");
        const typeTxt = document.getElementById("type");
        const baseExperienceTxt = document.getElementById("base-experience");
        const weightTxt = document.getElementById("weight");
        const heightTxt = document.getElementById("height");
        const hpTxt = document.getElementById("hp");
        const attackTxt = document.getElementById("attack");
        const defenseTxt = document.getElementById("defense");
        const specialAttackTxt = document.getElementById("special-attack");
        const specialDefenseTxt = document.getElementById("special-defense");
        const speedTxt = document.getElementById("speed");
        // initializing variables from html document

        displayImg.src = pokemonSprite;
        displayImg.style.display = "block";
        nameTxt.innerHTML = `<span class=\"color\">Name: </span>${data.name}`;
        typeTxt.innerHTML = `<span class=\"color\">Type: </span>${data.types[0].type.name}`;
        baseExperienceTxt.innerHTML = `<span class=\"color\">Base-Experience: </span>${data.base_experience}`;
        weightTxt.innerHTML = `<span class=\"color\">Weight: </span>${data.weight}`;
        heightTxt.innerHTML = `<span class=\"color\">Height: </span>${data.height}`;
        hpTxt.innerHTML = `<span class=\"color\">HP: </span>${data.stats[0].base_stat}`;
        attackTxt.innerHTML = `<span class=\"color\">Attack: </span>${data.stats[1].base_stat}`;
        defenseTxt.innerHTML = `<span class=\"color\">Defense: </span>${data.stats[2].base_stat}`;
        specialAttackTxt.innerHTML = `<span class=\"color\">Special-Attack: </span>${data.stats[3].base_stat}`;
        specialDefenseTxt.innerHTML = `<span class=\"color\">Special-Defense: </span>${data.stats[4].base_stat}`;
        speedTxt.innerHTML = `<span class=\"color\">Speed: </span>${data.stats[5].base_stat}`;
        // updating html/css
    } catch (error) { // catching if user entered an error
        window.alert("Invalid Entry. . . ") // tell user about error
        console.log('Error: ', error);
    }
}