import { Filter , GenderFilter, StatusFilter } from "./filterCharacterStrategy";


interface FilterProps {
  name: string;
  strategy: Filter;
}


// Estos filtros son estáticos pór falta de tiempo. La idea es hacerlos dinámuicos (!!!!!!)
export const filter: FilterProps[] = [
  { name: 'Male', strategy: new GenderFilter('Male') },
  { name: 'Female', strategy: new GenderFilter('Female') },
  { name: 'Alive', strategy: new StatusFilter('Alive') },
];