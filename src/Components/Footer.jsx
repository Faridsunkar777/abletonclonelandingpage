import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <h1>Ableton</h1>
      </div>

      {/* Main Footer Content Grid */}
      <div className="footer-content">
        {/* Sign up Section */}
        <div className="footer-signup">
          <h4>Sign up to our newsletter</h4>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads and more.</p>
          <div className="signup-form">
            <input type="email" placeholder="Email Address" />
            <button className="sign-up-btn">Sign up</button>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Register Live or Push ›</a></li>
            <li><a href="#">About Ableton ›</a></li>
            <li><a href="#">Jobs ›</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Education</h4>
          <ul>
            <li><a href="#">Offers for students and teachers ›</a></li>
            <li><a href="#">Offers for institutions ›</a></li>
            <li><a href="#">Push 1 trade-in initiative ›</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Find Ableton User Groups ›</a></li>
            <li><a href="#">Find Certified Training ›</a></li>
            <li><a href="#">Become a Certified Trainer ›</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Distributors</h4>
          <ul>
            <li><a href="#">Find Distributors ›</a></li>
            <li><a href="#">Try Push in-store ›</a></li>
          </ul>
        </div>

        {/* Language and Location */}
        <div className="footer-locale">
          <h4>Language and Location</h4>
          <div className="locale-selectors">
            <select>
              <option>English</option>
            </select>
            <select>
              <option>United States</option>
            </select>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#">Archive</a>
          <a href="#">Contact Us</a>
          <a href="#">Press Resources</a>
          <a href="#">Legal Info</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Imprint</a>
        </div>
        <div className="made-in">
          <span>Made in Berlin</span>
          <img src="/path-to-logo.png" alt="Berlin logo" />
        </div>
      </div>
    </footer>
  )
}
