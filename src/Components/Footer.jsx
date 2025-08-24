import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin , FaYoutube } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>AKASH</h2>
          <p>Style that speaks for you.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-all-links">
          <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/policy">FAQ</Link></li>
            <li><Link to="/policy">Returns</Link></li>
            <li><Link to="/policy">Shipping</Link></li>
            <li><Link to="/policy">Privacy Policy</Link></li>
          </ul>
        </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1D1NgyqadB/?mibextid=wwXIfr"><FaFacebook /></a>
            <a href="https://www.instagram.com/thehouseof_akash?igsh=MTZqNmNwejVhMTRydw%3D%3D&utm_source=qr"><FaInstagram /></a>
            <a href="https://www.youtube.com/@Akashtalkpolitics"><FaYoutube /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AKASH. All rights reserved <br />Developed and Maintained by N-technologies</p>
      </div>
    </footer>
  )
}

export default Footer
