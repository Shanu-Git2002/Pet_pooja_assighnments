import React from "react";

const FilterInput = ({ placeholder, onChange }) => {
  return (
    <input
      className="filter-input"
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default FilterInput;
