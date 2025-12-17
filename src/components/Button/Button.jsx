import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type, className }) => {
  return (
    <button 
      className={`button ${className || ''}`} 
      onClick={onClick} 
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;