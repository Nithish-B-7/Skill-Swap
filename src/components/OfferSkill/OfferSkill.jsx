import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./OfferSkill.css";

const OfferSkill = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    location: "",
    experience: "",
    availability: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.price) newErrors.price = "Price/Rate is required";
    else if (isNaN(formData.price)) newErrors.price = "Price must be a number";
    if (!formData.location) newErrors.location = "Location is required";

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
      alert("Skill offered successfully!");
    }
  };

  return (
    <div className="offer-skill">
      <div className="container">
        <div className="offer-skill-container">
          <div className="offer-skill-header">
            <h1 className="offer-skill-title">Offer Your Skill</h1>
            <p className="offer-skill-subtitle">
              Share your expertise with others in need of your services
            </p>
          </div>

          <form className="offer-skill-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-col">
                <FormInput
                  label="Skill Title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Web Development, Graphic Design"
                  required
                  error={errors.title}
                />
              </div>
              <div className="form-col">
                <FormInput
                  label="Category"
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Technology, Design, Marketing"
                  required
                  error={errors.category}
                />
              </div>
            </div>

            <FormInput
              label="Description"
              type="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the skill you are offering in detail..."
              required
              error={errors.description}
            />

            <div className="form-row">
              <div className="form-col">
                <FormInput
                  label="Price/Rate"
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g. 25"
                  required
                  error={errors.price}
                />
              </div>
              <div className="form-col">
                <FormInput
                  label="Location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. New York, Remote"
                  required
                  error={errors.location}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <FormInput
                  label="Years of Experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 3"
                  error={errors.experience}
                />
              </div>
              <div className="form-col">
                <FormInput
                  label="Availability"
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="e.g. Weekdays, Weekends"
                  error={errors.availability}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-large">
                Submit Skill
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferSkill;
