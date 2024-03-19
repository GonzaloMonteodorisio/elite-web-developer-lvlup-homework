import { getPokemons } from "./utils/getPokemon";
import { Pokemon } from "./types/pokemon";
import { canSum } from "./utils/canSum";

async function displayPokemons(): Promise<void> {
  const pokemons: Pokemon[] = await getPokemons();
  
  const pokemonListContainer = document.getElementById('pokemon-list');

  if (!pokemonListContainer) {
    console.error("Container not found");
    return;
  }

  pokemons.forEach(pokemon => {
    const pokemontElement = document.createElement('div');
    pokemontElement.classList.add('pokemon');

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemon.name;

    pokemontElement.appendChild(pokemonName);
    pokemonListContainer.appendChild(pokemontElement);
  });
}

displayPokemons();

// canSum
const target = 7;
const numbers = [4, 3, 7];
console.info(`canSum(${target}, ${numbers})`, canSum(target, numbers));