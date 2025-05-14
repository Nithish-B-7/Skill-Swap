import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      setErrors({});
      alert('Login successful!');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account to continue</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              error={errors.email}
            />
            
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.password}
            />
            
            <div className="form-actions">
              <button type="submit" className="button-large">
                Sign In
              </button>
            </div>
            
            <div className="auth-links">
              <Link to="/forgot-password">Forgot password?</Link>
              <div className="auth-separator">
                <span>Don't have an account?</span>
              </div>
              <Link to="/signup" className="signup-link">Create an account</Link>
            </div>
          </form>
        </div>
        
        <div className="auth-image">
          <div className="auth-image-overlay">
            <h2>Unlock Your Potential</h2>
            <p>Connect with top talent and opportunities in your field</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;