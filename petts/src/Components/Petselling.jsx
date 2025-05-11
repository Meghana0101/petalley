import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/Petselling.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form validation and submission logic here

    // Navigate to the Toys page
    navigate('/Shopping');
  };

  return (
    <div className='total-form'>
      <div className='card-form'>
        <div className='sub-form'>
          <h1 className='form-nm'>Reselling<br /> Toys & Clothes</h1>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='title'>
              <label className='tag'></label>
              <input className='box' type="text" name="description" placeholder='Description' /><br />

              <label className='tag'></label>
              <input className='box' type="text" name="price" placeholder='Set a Price' /><br />

              <label className='tag'></label>
              <input className='box' type="file" name="pictures" placeholder='Upload Pictures' /><br />

              <label className='tag'></label>
              <input className='box' type="text" name="state" placeholder='State' /><br />
            </div>
            <div className='btn-form-btn'>
              <button className='bttn-form' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
