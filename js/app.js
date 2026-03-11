const btn = document.getElementById("btnBuscar");
const input = document.getElementById("pokemonInput");
const card = document.getElementById("pokemonCard");

btn.addEventListener("click", obtenerPokemon);

function obtenerPokemon() {

    const nombre = input.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(response => response.json())
        .then(data => mostrarPokemon(data))
        .catch(error => {
            card.innerHTML = "<p>Pokémon no encontrado</p>";
        });
}

function mostrarPokemon(pokemon) {

    card.innerHTML = `
        <div class="card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}">
            <p><strong>Altura:</strong> ${pokemon.height}</p>
            <p><strong>Peso:</strong> ${pokemon.weight}</p>
        </div>
    `;
}