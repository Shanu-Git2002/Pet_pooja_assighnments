import React from "react";

const TableHeader = ({ columns, sortConfig, onSort, onFilterChange }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.key} onClick={() => col.sortable && onSort(col.key)}>
            {col.title}
            {col.sortable && (
              <span className="sort-icon">
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : sortConfig.direction === "desc"
                    ? "▼"
                    : "↕"
                  : "↕"}
              </span>
            )}
          </th>
        ))}
      </tr>
      <tr>
        {columns.map((col) => (
          <th key={`${col.key}-filter`}>
            {col.filterable && (
              <input
                className="filter-input"
                type="text"
                placeholder={`Filter ${col.title}`}
                onChange={(e) => onFilterChange(col.key, e.target.value)}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
