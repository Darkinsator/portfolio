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
    <div class="container">
      <h1>FormSubmit Demo</h1>
      <form target="_blank" action="https://formsubmit.co/c9088f97eddf51fd5e40a353dbad906c" method="POST">
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input type="text" name="name" class="form-control" placeholder="Full Name" required />
            </div>
            <div class="col">
              <input type="email" name="email" class="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
      </form>
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
