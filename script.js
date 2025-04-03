async function searchPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonDataDiv = document.getElementById('pokemonData');

    try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        if (!response.ok) {
            throw new Error('Pokemon no encontrado');
        }
        const data = await response.json();

        //Mostrar los datos en el HTML
        pokemonDataDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <p>Tipos: ${data.types.map(type => type.type.name).join(', ')}</p>
        `;
    } catch (error) {
        pokemonDataDiv.innerHTML = `<p>${error.message}</p>`;
    }
}