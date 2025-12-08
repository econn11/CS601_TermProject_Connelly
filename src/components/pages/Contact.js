import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {   //the handleChange updates the state with the current value of the input field every time the user types.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // First name validation
    if (formData.firstname.length <= 2 || !/^[A-Za-z]+$/.test(formData.firstname)) {
      newErrors.firstname =
        "Required: First name must be at least 2 characters long and may not contain any special characters";
    }

    // Last name validation
    if (formData.lastname.length <= 2 || !/^[A-Za-z]+$/.test(formData.lastname)) {
      newErrors.lastname =
        "Required: Last name must be at least 2 characters long and may not contain any special characters.";
    }

    // Email validation
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div id="success-message">
        Thank you, {formData.firstname} {formData.lastname}, for your message!  
        I will get back to you as soon as possible.
      </div>
    );
  }

  return (
    <div className ="contact-container">
    <form id="myForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <span className="error">{errors.firstname}</span>
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <span className="error">{errors.lastname}</span>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          maxLength="150"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}