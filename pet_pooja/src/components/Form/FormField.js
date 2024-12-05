import React, { useState } from "react";

const FormField = ({ field, value, onChange, error }) => {
  const { name, label, type, options, validation } = field;
  const [fieldError, setFieldError] = useState("");

  const validateField = (value) => {
    let errorMessage = "";

    // Handle required validation
    if (validation?.required && !value) {
      errorMessage = `${label} is required`;
    }

    // Handle pattern matching (e.g., for email)
    if (validation?.pattern && !validation.pattern.test(value)) {
      errorMessage = `Invalid ${label}`;
    }

    // Handle min/max length validation
    if (validation?.minLength && value.length < validation.minLength) {
      errorMessage = `${label} should be at least ${validation.minLength} characters`;
    }

    if (validation?.maxLength && value.length > validation.maxLength) {
      errorMessage = `${label} should not exceed ${validation.maxLength} characters`;
    }

    setFieldError(errorMessage);
  };

  const handleChange = (e) => {
    onChange(name, e.target.value);
    validateField(e.target.value);
  };

  switch (type) {
    case "text":
    case "email":
      return (
        <div className="form-field">
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
          {(error || fieldError) && <div className="error-message">{fieldError || error}</div>}
        </div>
      );
    case "textarea":
      return (
        <div className="form-field">
          <label htmlFor={name}>{label}</label>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
          />
          {(error || fieldError) && <div className="error-message">{fieldError || error}</div>}
        </div>
      );
    case "select":
      return (
        <div className="form-field">
          <label htmlFor={name}>{label}</label>
          <select id={name} name={name} value={value} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {(error || fieldError) && <div className="error-message">{fieldError || error}</div>}
        </div>
      );
    case "checkbox":
      return (
        <div className="form-field">
          <label htmlFor={name}>{label}</label>
          {options.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name={name}
                checked={value.includes(option.value)}
                onChange={() => {
                  const newValue = value.includes(option.value)
                    ? value.filter((v) => v !== option.value)
                    : [...value, option.value];
                  onChange(name, newValue);
                }}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
          {(error || fieldError) && <div className="error-message">{fieldError || error}</div>}
        </div>
      );
    case "radio":
      return (
        <div className="form-field">
          <label>{label}</label>
          {options.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                id={option.value}
                name={name}
                checked={value === option.value}
                onChange={() => onChange(name, option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
          {(error || fieldError) && <div className="error-message">{fieldError || error}</div>}
        </div>
      );
    default:
      return null;
  }
};

export default FormField;
