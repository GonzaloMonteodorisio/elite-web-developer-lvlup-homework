import * as React from "react";
// Chip

import type { Filter } from "../../utils/filterCharacterStrategy";
import { filter } from "../../utils/filters";

interface FilterComponentProps {
  changeFilterStrategy: (strategy: Filter) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ changeFilterStrategy }) => {
  return (
    <>
      {filter.map((filter, index) => (
        <span 
          key = {`${filter.name}-${index}`}
          onClick={() => changeFilterStrategy(filter.strategy)}
          style={{marginRight: '6px'}}
        >
          {filter.name}
        </span>
      ))}
    </>
  );
}

export default FilterComponent;
