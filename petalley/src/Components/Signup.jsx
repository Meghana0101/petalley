import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Signup.css';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({
      ...errors,
      [name]: ''
    });
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully!');
      navigate('/Shopping'); // Redirect to home page or any other page
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '*Email is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = '*Password is required';
    } else if (formData.password.length < 6) {
      errors.password = '*Password must be at least 6 characters long';
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = '*Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = '*Passwords do not match';
    }

    return errors;
  };

  return (
    <div className='total-forms'>
      <div className='card-form'>
        <div className='sub-form'>
          <h1 className='form-nm'>Sign up</h1>
          <form onSubmit={handleSubmit} className='card-body'>
            <div className='title'>

              <label className='tag'></label>
              <input className='boxs' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email' /><br />
              {errors.email && <span className='msg'>{errors.email}</span>}<br />

              <label className='tag'></label>
              <input className='boxs' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' /><br />
              {errors.password && <span className='msg'>{errors.password}</span>}<br />

              <label className='tag'></label>
              <input className='boxs' type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' /><br />
              {errors.confirmPassword && <span className='msg'>{errors.confirmPassword}</span>}<br />
            </div>
            <div className='btn-form-btns'>
              <button className='bttn-form' type="submit">Register</button>
            </div>
          </form>

          <hr />
          <div className='p-passtag'>
            <p className='gg-tag'><i className="ri-google-fill"></i><b className='g-tag'> Register with Google</b></p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home
