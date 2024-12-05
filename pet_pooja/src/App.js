import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import TableContainer from "./components/Table/TableContainer";
import FormContainer from "./components/Form/FormContainer";
import tableData from "./Data/tableData";
import formConfig from "./Data/formConfig";

const tableColumns = [
  { key: "id", title: "ID", sortable: true, filterable: true },
  { key: "name", title: "Name", sortable: true, filterable: true },
  { key: "age", title: "Age", sortable: true, filterable: true },
];

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <NavLink to="/" style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}>
                Table Component
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}>
                Form System
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<TableContainer data={tableData} columns={tableColumns} />}
          />
          <Route
            path="/form"
            element={<FormContainer config={formConfig} onSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
