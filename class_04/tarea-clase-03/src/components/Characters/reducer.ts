import { CharacterProps } from "../../types/character";

enum ActionType {
  SET_CHARACTERS = 'SET_CHARACTERS', SET_LOADING = 'SET_LOADING',
};

export interface State {
  characters: CharacterProps[];
}

export interface Action {
  type: ActionType;
  payload: unknown; 
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_CHARACTERS:
      return {
        ...state,
        characters: (action.payload) as CharacterProps[],
      }
    
      default:
        return state;
  }
}

export const setCharacters = (characters: CharacterProps[]): Action => {
  return {
    type: ActionType.SET_CHARACTERS,
    payload: characters,
  }
}