import axios from "axios";
import { Pokemon } from "../types/pokemon";

export const getPokemons = async <Pokemon>(): Promise<Pokemon[]> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  return response.data.results;
}

