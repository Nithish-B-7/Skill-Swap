import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import "../Login/Login.css";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setErrors({});
      alert("Account created successfully!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1 className="auth-title">Create an Account</h1>
          <p className="auth-subtitle">
            Join our community of skilled professionals
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <FormInput
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              error={errors.name}
            />

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

            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.confirmPassword}
            />

            <div className="form-actions">
              <button type="submit" className="button-large">
                Create Account
              </button>
            </div>

            <div className="auth-links">
              <div className="auth-separator">
                <span>Already have an account?</span>
              </div>
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </div>
          </form>
        </div>

        <div className="auth-image signup-image">
          <div className="auth-image-overlay">
            <h2>Share Your Expertise</h2>
            <p>Start offering your skills and find new opportunities today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
