import { getpokemon } from "./utils/getPokemon";
import { Pokemon } from "./types/pokemon";

async function pokemon() {
  const pokemon = await getpokemon<Pokemon>(1);
  console.info('pokemon: ', pokemon);
}

pokemon();
