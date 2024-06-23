import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';


const Home = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    // if (Object.keys(errors).length === 0) {

    //   console.log('Form submitted successfully!');
    // } else {
    //   // console.log('Form has errors. Please fix them.');
    // }

  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = '*Email is required';
    }


    
    if (!formData.password.trim()) {
      errors.password = '*Password is required';
    } else if (formData.password.length < 6) {
      errors.password = '*Password must be at least 6 characters long';
    }
    if (formData.email && formData.password !== '') {
      Navigate('/Shopping')
    }

    return errors;
  };

  return (
    <div className='total-formss'>
      <div className='card-form'>
        <div className='sub-form'>
          <h1 className='form-nm'>Login</h1>
          <form onSubmit={handleSubmit} className='card-body'>
            <div className='title'>

              <label className='tag'></label>
              <input className='boxs' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email/Username' /><br />
              {errors.email && <span className='msg'>{errors.email}</span>}<br />

              <label className='tag'></label>
              <input className='boxs' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='password' /><br />
              {errors.password && <span className='msg'>{errors.password}</span>}<br />

              <p className='p-tags'>Forgot Password ?</p>
            </div>
            <div className='btn-form-btns'>
              <button className='bttn-form' type="submit">Login</button>
            </div>
          </form>

        <hr/>
        <div className='p-passtag'>
        <p className='gg-tag'><i class="ri-google-fill"></i><b className='g-tag'> Login with Google</b></p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Home
