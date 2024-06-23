import React from 'react'
// import { useNavigate } from 'react-router-dom';
import '../Style/Petsform.css';


const Home = () => {

  return (
    <div className='total-forms'>
      <div className='card-form'>
        <div className='sub-form'>
          <h1 className='form-nm'>Pet Sitters Form</h1>
          <form  className='card-body'>
            <div className='title'>

              <label className='tag'></label>
              <input className='box' type="text" name="email"  placeholder='Pet Breed' /><br />
              {/* {errors.email && <span className='msg'>{errors.email}</span>}<br /> */}

              <label className='tag'></label>
              <input className='box' type="text" name="password" placeholder='Number of hours' /><br />

              <label className='tag'></label>
              <input className='box' type="text" name="email"  placeholder='Location' /><br />

              <label className='tag'></label>
              <input className='box' type="number" name="number"  placeholder='Phone Number' /><br />

              <label className='tag'></label>
              <input className='box' type="number" name="number"  placeholder='Age Required' /><br />
              {/* {errors.password && <span className='msg'>{errors.password}</span>}<br /> */}

              {/* <p className='p-tag'>Forgot Password ?</p> */}
            </div>
            {/* <div className='btn-form-btn'>
              <button className='bttn-form' type="submit">Login</button>
            </div> */}
          </form>

        
        {/* <div className='p-passtag'>
        <p className='gg-tag'><i class="ri-google-fill"></i><b className='g-tag'> Login with Google</b></p>
        </div> */}

        </div>
      </div>
    </div>
  )
}

export default Home
