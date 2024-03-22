import * as React from "react";
import { getResources } from "../../utils/getResources";
import { type CharacterProps, FetchedCharacterProps } from "../../types/character";
import Character from "../Character/Character";
import { AxiosError } from "axios";
import { useFilterCharacters } from "../../hooks/useFilterCharacters";
import FilterComponent from "../Filters/Filters";
import { reducer, setCharacters } from "./reducer";

export const Characters = () => {
  const [state, dispatch] = React.useReducer(reducer, { characters: [] });
  // const [characters, setCharacters] = React.useState<CharacterProps[]>([]);
  // debería haber un custom hook para useCharacters()

  const { filteredCharacters, changeFilterStrategy } = useFilterCharacters();

  React.useEffect(() => {
    const fetch = async() => {
      try {
        const data = await getResources<FetchedCharacterProps>('/character');
        const { results } = data as FetchedCharacterProps;
        dispatch(setCharacters(results));
        // setCharacters(results);
      } catch (err) {
        // Discriminar el tipo de error según la response. 
        // Setear un state dependiendo del tipo de error. 
        // Enviar métrica de error a Sentry para que nos muestre, en tiempo real, qué errores está teniendo la app.
        // err instance of ...
        // Decidir qué pantalla le voy a mostrar al usuario dependiendo del error.
        // agregar a la tarea el manejo de errores en la vista.
        console.error(`Error fetching data: `, err); // esto no sirve más que para debuggear.

        if (err instanceof AxiosError) {
          if (err.code === '500') {
            // set del state, en función del enumerador que te arroja, o timeout para mostrar un mensaje
          }
          // validate instanceof errors
        };
      }
    }
    fetch();
  }, []);

  console.info('state.characters: ', state.characters);

  return (
    <>
      <FilterComponent changeFilterStrategy={changeFilterStrategy} />
      
      <div style={{ marginTop:'32px' }}>
        {filteredCharacters(state.characters)?.map((character) => (
          <Character
            key = {character.id}
            {...character}
          />
        )
        )}
      </div>
    </>
  );
}

export default Characters;