import React from 'react';
import '../Style/Aboutus.css';

const Home = () => {
  return (
    <div className='aboutus'> 
              <section>
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">At Petalley, we strive to create a welcoming environment for all pet lovers. Our mission is to provide the best resources, products, and community support for pet owners and their furry friends.</p>
              </section>
              <section>
                <h2 className="section-title">Who We Are</h2>
                <p className="section-content">We are a team of passionate pet enthusiasts dedicated to improving the lives of pets and their owners. With years of experience in the pet industry, we bring a wealth of knowledge and expertise to help you care for your pets.</p>
              </section>
              <section>
                <h2 className="section-title">What We Offer</h2>
                <ul className="section-list">
                  <li>Comprehensive pet care guides</li>
                  <li>A wide range of pet products</li>
                  <li>Community forums for pet owners</li>
                  <li>Expert advice and tips</li>
                </ul>
              </section>
              <section>
                <h2 className="section-title">Join Our Community</h2>
                <p className="section-content">Become a part of our pet-loving community today. Share your experiences, get advice, and connect with other pet owners who share your passion for pets.</p>
              </section>
            </div>
  );
};

export default Home
