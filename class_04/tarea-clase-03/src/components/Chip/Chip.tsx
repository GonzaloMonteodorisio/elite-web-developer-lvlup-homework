import * as React from "react";

interface ChipProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Chip;