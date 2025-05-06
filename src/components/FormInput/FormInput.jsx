import React from 'react';
import './FormInput.css';

const FormInput = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  required,
  error
}) => {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          className={`form-textarea ${error ? 'error' : ''}`}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className={`form-input ${error ? 'error' : ''}`}
          type={type || 'text'}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormInput;