import axios from "axios";
import { Pokemon } from "../types/pokemon";

export const getpokemon = async <T>(id: number): Promise<T> => {
  const response = await axios.get<T>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}