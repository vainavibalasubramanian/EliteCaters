import React from 'react';
import Profile1 from './Images/Profile1.jpg';
import Profile2 from './Images/Profile2.jpg';
import Profile3 from './Images/Profile3.jpg';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="intro-section">
        <h1>About Us</h1>
        <p style={{ fontSize: '20px', textAlign: 'center' }}>
          Welcome to Campus Eats, a premier food services company dedicated to nourishing the busy lives of university students and working professionals. We understand the unique dietary needs and time constraints of our customers, offering a diverse menu of healthy and delicious meals that are perfect for any time of day. Whether you're rushing to your next class or working through a lunch break, Campus Eats delivers convenient, high-quality food options right to your door, ensuring you stay energized and focused throughout your day. Our commitment to excellence and customer satisfaction makes us the go-to choice for balanced and flavorful meals on the go.
        </p>
      </section>

      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="review">
          <img src={Profile1} alt="John Doe" className="review-image" style={{width:'10%' , height:'20vh'}}/>
          <div className="review-text-box">
            <p>"Great service and friendly staff!" - John Doe</p>
          </div>
        </div>
        <div className="review">
          <img src={Profile2} alt="Jane Smith" className="review-image" style={{width:'10%' , height:'20vh'}}/>
          <div className="review-text-box">
            <p>"I love the quality of their products." - Jane Smith</p>
          </div>
        </div>
        <div className="review">
          <img src={Profile3} alt="Michael Brown" className="review-image" style={{width:'10%' , height:'20vh'}}/>
          <div className="review-text-box">
            <p>"Fast and reliable delivery every time." - Michael Brown</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street,<br/> Coimbatore, TamilNadu - 641008 <br/> Phone Number: +912345678910</p>
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.403006845318!2d144.95592331590765!3d-37.81720944202402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e13261114a1!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1597640912840!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-column">
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>Custom Order</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Address :</li>
            <li>ABC street, Coimbatore</li>
            <li>641008</li>
          </ul>
        </div>
        <div className="footer-column social">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <div>Copyright © 2024, PrimePlates.</div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
