import React from 'react';
import '../Style/Aboutus.css';
import aboutUsImage from '../Uploads/login1.avif'; // Update the path as per your project structure

const Home = () => {
  return (
    <div className='aboutus'> 
      <div className='about'>
        <img src={aboutUsImage} alt="About Us" className='about-image' />
        <section>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-content">At Pet Alley, we strive to create a welcoming environment for all pet lovers. Our mission is to provide the best resources, products, and community support for pet owners and their furry friends.</p>
        </section>
        <br />

        <section>
          <h2 className="section-title">What We Offer</h2>
          <ul className="section-list">
            <li>Comprehensive pet care guides</li>
            <li>A wide range of pet products</li>
            <li>Community forums for pet owners</li>
            <li>Expert advice and tips</li>
          </ul>
        </section>
        <br />
        <section>
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-content">Become a part of our pet-loving community today. Share your experiences, get advice, and connect with other pet owners who share your passion for pets.</p>
        </section>
        <br />
        <section>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-content">petalley@gmail.com</p>
          <p className="section-content">+91 9603199151</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
