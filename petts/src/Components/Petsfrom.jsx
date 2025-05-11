import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/Petsform.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form validation and submission logic here

    // Navigate to the petsitter page
    navigate('/Petsitters');
  };

  return (
    <div className='total-forms'>
      <div className='card-form'>
        <div className='sub-form'>
          <h1 className='form-nm'>Pet Sitters Form</h1>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='title'>
              <label className='tag'></label>
              <input className='box' type="text" name="breed" placeholder='Pet Breed' /><br />

              <label className='tag'></label>
              <input className='box' type="text" name="hours" placeholder='Number of hours' /><br />

              <label className='tag'></label>
              <input className='box' type="text" name="location" placeholder='Location' /><br />

              <label className='tag'></label>
              <input className='box' type="number" name="phone" placeholder='Phone Number' /><br />

              <label className='tag'></label>
              <input className='box' type="number" name="age" placeholder='Age Required' /><br />
            </div>
            <div className='btn-form-btn'>
              <button className='bttn-form' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
