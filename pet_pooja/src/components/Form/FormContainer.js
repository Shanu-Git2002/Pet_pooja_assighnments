import React, { useState } from "react";
import FormField from "./FormField";
import "./Form.css";

const FormContainer = ({ config }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    config.forEach((field) => {
      if (field.validation?.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted", formData);
    }
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>Custom Form</h2>
      <form onSubmit={handleSubmit}>
        {config.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
