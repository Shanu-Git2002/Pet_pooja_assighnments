import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.css";

const TableContainer = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "default" });
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : prev.direction === "desc" ? "default" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredData = useMemo(() => {
    let filtered = [...data];
    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value) {
        filtered = filtered.filter((row) =>
          row[key].toString().toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    return filtered;
  }, [data, filters]);

  const sortedData = useMemo(() => {
    if (sortConfig.direction === "default") return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
          onFilterChange={handleFilterChange}
        />
        <TableBody columns={columns} data={sortedData} />
      </table>
    </div>
  );
};

export default TableContainer;
