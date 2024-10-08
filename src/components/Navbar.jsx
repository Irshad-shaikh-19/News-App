import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="fs-4 badge text-bg-secondary">NewsFusion</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('business')}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('health')}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('science')}>Science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('sports')}>Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('technology')}>Technology</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory('entertainment')}>Entertainment</button>
            </li>
          </ul>
          <button 
            className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} ms-auto`} 
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
