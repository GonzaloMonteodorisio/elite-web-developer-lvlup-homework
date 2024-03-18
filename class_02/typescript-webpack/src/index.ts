import { getpokemon } from "./utils/getPokemon";
import { Pokemon } from "./types/pokemon";
import { customMap } from "./generics";
import { getUniquesItems } from "./generics";

async function pokemon() {
  const pokemon = await getpokemon<Pokemon>(1);
  console.info('pokemon: ', pokemon);
}

pokemon();

const numbers: number[] = [1, 2, 3];

const duplicateNumbers = customMap<number>(numbers, (x: number) => x *2);

console.info('duplicateNumbers: ', duplicateNumbers);

const names = ['Pepe', 'Marcos', 'Pepe', 'José', 'José'];

const uniqueNames = getUniquesItems<string>(names);
console.info('uniqueNames: ', uniqueNames);
