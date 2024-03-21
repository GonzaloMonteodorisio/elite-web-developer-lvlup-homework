import * as React from "react";
// Chip

import type { Filter } from "../../utils/filterCharacterStrategy";
import { filter } from "../../utils/filters";
import Chip from "../Chip/Chip";

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
          <Chip onClick={() => changeFilterStrategy(filter.strategy)}>
            {filter.name}
          </Chip>
        </span>
      ))}
    </>
  );
}

export default FilterComponent;
