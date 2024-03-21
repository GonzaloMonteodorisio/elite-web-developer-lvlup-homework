// ESLint -> los tipos se importan como types
import Character from "../components/Character";
import type { CharacterProps, Gender, Status } from "../types/character";

export interface Filter {
  filter(characters: CharacterProps[]): CharacterProps[];
}

export class GenderFilter implements Filter {
  constructor(public gender: Gender) {} // Instancia rápida
  filter(characters: CharacterProps[]): CharacterProps[] {
    return characters.filter((character) => character.gender === this.gender); 
  }
}

export class StatusFilter implements Filter {
  constructor(public status: Status) {} // Instancia rápida
  filter(characters: CharacterProps[]): CharacterProps[] {
    return characters.filter((character) => character.status === this.status); 
  }
}