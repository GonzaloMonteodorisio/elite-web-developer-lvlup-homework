import * as React from 'react';

import type { Filter } from '../utils/filterCharacterStrategy';
import type { CharacterProps } from '../types/character';

interface UseFilteredCharacters {
  filteredCharacters: (characters: CharacterProps[]) => CharacterProps[];
  changeFilterStrategy: (strategy: Filter) => void;
}

export const useFilterCharacters = (): UseFilteredCharacters => {
  const [filterStrategy, setFilterStrategy] = React.useState<Filter | null>(null);

  const filteredCharacters = (characters: CharacterProps[]): CharacterProps[] => {
    return filterStrategy ? filterStrategy.filter(characters) : characters;
  }

  const changeFilterStrategy = (strategy: Filter) => {
    setFilterStrategy(strategy);
  }

  return {
    filteredCharacters,
    changeFilterStrategy,
  }
}