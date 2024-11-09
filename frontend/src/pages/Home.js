import React from 'react';
import './Home.css';
import Slider from 'react-slick';
import slide1 from '../images/r2.jpeg'
import slide2 from '../images/r3.jpeg'
import slide3 from '../images/download.jpeg'
import pump from '../images/pump.svg'
import tire from '../images/tire.svg'
import towtruck from '../images/tow-truck.svg'
import battery from '../images/battery.svg'
import rev1 from '../images/re1.webp'
import rev2 from '../images/re2.webp'
import rev3 from '../images/re3.webp'
import FAQ from '../components/FAQ';
import Login from './Login';
import Footer from '../components/Footer';
import ServiceRequestForm from '../components/ServiceRequestForm';
import HeroSlider from '../components/HeroSlider';

const reviews = [
  {
    id: 1,
    text: "Great service! They arrived quickly and helped me get back on the road.",
    name: "Ayush Singh",
    rating: 5,
    image: rev1,
  },
  {
    id: 2,
    text: "Very professional and friendly staff. Highly recommend!",
    name: "Raj Kumar",
    rating: 4,
    image: rev2,
  },
  {
    id: 3,
    text: "The team was very helpful and got to me in no time!",
    name: "Richa Kaur",
    rating: 5,
    image: rev3,
  },
  
];


const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="home">
      {/* Hero Section */}
      {/* <section className="hero">
        <div className="hero-content">
          <h1>Your Roadside Assistance Partner</h1>
          <p>Quick, reliable, and always ready to help you.</p>
          <button className="cta-button">Get Assistance</button>
        </div>
      </section> */}

    <HeroSlider />

{/* <section className="hero-section">
        <Slider {...sliderSettings}>
          <div className="hero-slide">
            <img src={slide1} alt="Slide 1" />
            <div className="hero-text">
              <h1>Fast and Reliable Roadside Assistance</h1>
              <p>Your safety is our priority</p>
              <button className="hero-btn">Get Assistance</button>
            </div>
          </div>
          <div className="hero-slide">
            <img src={slide2} alt="Slide 2" />
            <div className="hero-text">
              <h1>24/7 Support Anytime, Anywhere</h1>
              <p>We’re just a call away</p>
              <button className="hero-btn">Contact Us</button>
            </div>
          </div>
          <div className="hero-slide">
            <img src={slide3} alt="Slide 3" />
            <div className="hero-text">
              <h1>Experienced Professionals Ready to Help</h1>
              <p>Get back on the road quickly</p>
              <button className="hero-btn">Learn More</button>
            </div>
          </div>
        </Slider>
      </section> */}

      {/* Services Section */}
      <section className="services" id='services'>
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={towtruck} alt="Towing" />
            <h3>Towing</h3>
            <p>Reliable towing service for your vehicle.</p>
          </div>
          <div className="service-card">
            <img src={battery} alt="Battery Jumpstart" />
            <h3>Battery Jumpstart</h3>
            <p>Quick help when your car battery dies.</p>
          </div>
          <div className="service-card">
            <img src={tire} alt="Flat Tire Repair" />
            <h3>Flat Tire Repair</h3>
            <p>Get your flat tire repaired quickly.</p>
          </div>
          <div className="service-card">
            <img src={pump} alt="Fuel Delivery" />
            <h3>Fuel Delivery</h3>
            <p>Emergency fuel delivered to your location.</p>
          </div>
        </div>
      </section>

      {/* <Login /> */}
      <section className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-slide">
              <img src={review.image} alt={review.name} className="reviewer-image" />
              <p>"{review.text}"</p>
              <h4>- {review.name}</h4>
              <div className="rating">Rating: {review.rating} ★</div>
            </div>
          ))}
        </Slider>
      </section>

      <FAQ />

      {/* About Us Section */}
      
      {/* Contact Section */}

      <ServiceRequestForm />
      {/* <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="How can we help you?" />
          <button type="submit">Submit</button>
        </form>
      </section> */}

      <Footer />
    </div>
  );
};

export default Home;
