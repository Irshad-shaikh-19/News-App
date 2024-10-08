import React from 'react';

const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="footer text-white mt-5 py-5">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase text-primary">News Fusion</h5>
            <p>
              Stay updated with the latest news! <br /> 
              Never miss out on top headlines and breaking news.
            </p>
          </div>

         
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

        
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Web Development</a></li>
              <li><a href="#" className="text-white text-decoration-none">Digital Marketing</a></li>
              <li><a href="#" className="text-white text-decoration-none">SEO Optimization</a></li>
              <li><a href="#" className="text-white text-decoration-none">Consulting</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-envelope me-2"></i> email@example.com</li>
              <li><i className="bi bi-phone me-2"></i> +1 234 567 890</li>
              <li><i className="bi bi-geo-alt me-2"></i> 123 Main St, City, Country</li>
            </ul>
          </div>

    
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

      
        <div className="row">
          <div className="col text-center mt-4">
            <p className="mb-0">
              &copy; 2024 NewsFusion. All rights reserved. | 
              <a href="#" className="text-white text-decoration-none"> Privacy Policy</a> | 
              <a href="#" className="text-white text-decoration-none"> Terms of Service</a>
            </p>
          
            <button 
              className="btn btn-primary mt-3"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <i className="bi bi-arrow-up"></i> 
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
