import React from "react";
import "./Contact.css";
import aka_20 from "../assets/Akash_20.jpg"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-us-top">
        <h1>Contact Us</h1>
        <p className="intro">
          We’d love to hear from you! Reach out to{" "}
          <strong>The House of Akash</strong> for inquiries, collaborations, or
          just to say hello.
        </p>
      </div>
      <div className="stories">
        <p>Our Story</p>
      </div>
      <div className="contact-us-middle">
        <p>
          At House of Akash, we believe that every idea deserves the right
          foundation to grow, connect, and inspire. What started as a small
          vision has today become a hub for creativity, collaboration, and
          innovation. Our mission is to bring together people, businesses, and
          communities by offering solutions that are not only practical but also
          meaningful. <br /> <br />From digital innovation to personalized services, we focus
          on creating experiences that resonate with people. Over the years,
          we’ve built trust through dedication, hard work, and a constant
          commitment to excellence. Whether it’s guiding young professionals,
          supporting businesses, or simply being a reliable name people can turn
          to, House of Akash stands as a symbol of passion and progress.
        </p>
        <img src={aka_20} alt="img not found" />
      </div>
      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Your Contact" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-infos">
          <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>You can reach us at our office or connect with us online.</p>

          <div className="info-block">
            <h3>📍 Address</h3>
            <p>Lelepur Indergarh Tirwa Kannauj U.P. 209723</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>+91 9129938013</p>
          </div>

          <div className="info-block">
            <h3>✉️ Email</h3>
            <a
              href="mailto:info@houseofakash2025.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@houseofakash2025.com
            </a>
          </div>

          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6932.035006856152!2d79.65629698288811!3d26.962161615136093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e0dc00b7cb09d%3A0x47e69f3417a20f68!2sHanuman%20mandir!5e0!3m2!1sen!2sin!4v1755995119693!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="House of Akash Location"
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
