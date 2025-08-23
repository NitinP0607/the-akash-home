import React from "react";
import "./About.css";
import pro_1 from "../assets/Akash_1.jpg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">The House of Akash</span>,
          where fashion meets comfort, quality, and affordability. We believe
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
            <p><span style={{color:"#171536"}}>Akash Bharti</span> - The Founder of "The House of Akash"</p>
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
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become a trusted name in fashion that inspires confidence,
            empowers individuality, and connects people through style. We
            envision a world where fashion is not just about trends but about
            creating stories, memories, and lasting impressions.
          </p>
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
            Hover over the video to watch our story unfold — from creativity to
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
                  preload="none"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="circle-video "
                />
                <p>Your choice, our commitment</p>
              </div>
              <div className="vedio">
                <video
                  src="/shop-about-vedio2.mp4" // put your video file inside public/videos/
                  muted
                  loop
                  preload="none"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="circle-video "
                />
                <p>Our Quality build trust</p>
              </div>
              <div className="vedio">
                <video
                  src="/shop-about-vedio3.mp4" // put your video file inside public/videos/
                  muted
                  loop
                  preload="none"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="circle-video "
                />
                <p>Your style, our passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
