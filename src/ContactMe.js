import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ContactMe = () => {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <h2>Send me an email to get in contact.</h2>
      <form target="_blank" action="https://formsubmit.co/c9088f97eddf51fd5e40a353dbad906c" method="POST">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">Submit</button>
      </form>
      
      <div className="picture-links">
        <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
          <img src="'/link1.png'" alt="Link 1" />
        </a>
        <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
          <img src="link-to-image2.jpg" alt="Link 2" />
        </a>
        <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer">
          <img src="link-to-image3.jpg" alt="Link 3" />
        </a>
        <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
          <img src="link-to-image4.jpg" alt="Link 4" />
        </a>
      </div>

      <footer>
        <p>© 2024 My Portfolio</p>
      </footer>
      
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src="/linkarrow.png" alt="Back to Top" />
        </button>
      )}
    </div>
  );
};

export default ContactMe;
