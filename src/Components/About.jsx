import React from "react";
import "./About.css";
import pro_1 from "../assets/Akash_1.jpg";
import mission from "../assets/mission.jpg";
import mission2 from "../assets/product-20.jpg";
import mission3 from "../assets/product22.jpg";
import vision from "../assets/vision.jpg";
import vision2 from "../assets/product-19.jpg";
import vision3 from "../assets/product-17.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to{" "}
          <span className="highlight">
            <Link to="/">The House of Akash</Link>
          </span>
          , where fashion meets comfort, quality, and affordability. We believe
          style is more than just clothing — it’s a way of expressing who you
          are, and we strive to make that journey special for everyone.
        </p>
      </div>
      <div className="about-sections">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            At The House of Akash, we don’t just design clothes; we create
            experiences that celebrate individuality. Founded with a passion for
            bringing together timeless elegance and modern trends, our mission
            is to offer premium-quality fashion that fits every lifestyle. Each
            piece in our collection is carefully curated with attention to
            detail, comfort, and durability — ensuring that our customers not
            only look good but feel confident in every moment.
          </p>
          <div className="profile">
            <img src={pro_1} alt="img not found" />
            <p>
              <span style={{ color: "#171536" }}>Akash Bharti</span>{" "}
              <a href="https://www.youtube.com/@Akashtalkpolitics">
                The Founder of "The House of Akash"
              </a>
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To make fashion accessible, stylish, and affordable for everyone
            while delivering top-notch quality and service. We aim to bridge the
            gap between luxury designs and everyday essentials by offering
            collections that combine both.
          </p>
          <div className="profile">
            <div className="missions">
              <div className="mission">
                <img src={mission} alt="img not found" />
              </div>
              <div className="mission">
                <img src={mission2} alt="img not found" />              </div>
              <div className="mission">
                <img src={mission3} alt="img not found" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become a trusted name in fashion that inspires confidence,
            empowers individuality, and connects people through style. We
            envision a world where fashion is not just about trends but about
            creating stories, memories, and lasting impressions.
          </p>
          <div className="profile">
           <div className="visions">
              <div className="vision">
                <img src={vision} alt="img not found" />
              </div>
              <div className="vision">
                <img src={vision2} alt="img not found" />              </div>
              <div className="vision">
                <img src={vision3} alt="img not found" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Quality First:</strong> Premium fabrics & top-notch
              stitching.
            </li>
            <li>
              <strong>Affordability:</strong> Fashion that doesn’t break your
              budget.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Your happiness is our priority.
            </li>
            <li>
              <strong>Innovation:</strong> Blending classic trends with modern
              styles.
            </li>
            <li>
              <strong>Sustainability:</strong> Moving towards eco-friendly
              choices.
            </li>
          </ul>
        </div>
        <div className="about-section video-section">
          <h2>Discover Our Journey</h2>
          <p>
            We are writing the story of unfold — from creativity to
            craftsmanship, every collection reflects our passion for style and
            quality.
          </p>
          <div className="videos-container">
            <div className="vedios">
              <div className="vedio">
                <video
                  src="/shop-about-vedio1.mp4" // put your video file inside public/videos/
                  muted
                  loop
                  autoPlay
                  preload="none"
                  className="circle-video "
                />
                <p>Your choice, our commitment</p>
              </div>
              <div className="vedio">
                <video
                  src="/shop-about-vedio2.mp4" // put your video file inside public/videos/
                  muted
                  loop
                  autoPlay
                  preload="none"
                  className="circle-video "
                />
                <p>Our Quality build trust</p>
              </div>
              <div className="vedio">
                <video
                  src="/shop-about-vedio3.mp4" // put your video file inside public/videos/
                  muted
                  loop
                  autoPlay
                  preload="none"
                  className="circle-video "
                />
                <p>Your style, our passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-contact-btn">
        <Link to="/contact" className="contact-btn">
         For More Information Contact us 
        </Link>
      </div>
    </div>
  );
};

export default About;
