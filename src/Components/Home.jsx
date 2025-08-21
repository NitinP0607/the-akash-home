import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../assets/Akash_1.jpg";
import img2 from "../assets/Akash_2.jpg";
import img4 from "../assets/Akash_4.jpg";
import img20 from "../assets/Akash_20.jpg";
import show1 from "../assets/home-pic-vertical1.jpg";
import show2 from "../assets/home-pic-vertical2.jpg";
import show3 from "../assets/home-pic-vertical3.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  const images = [img1, img2, img4, img20];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 3s
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="home-container">
      <Navbar />
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img src={src} alt={`slide-${index}`} className="carousel-img" />
              <div className="carousel-overlay">
                <h1 className="brand-title">The house of AKASH</h1>
                <p className="brand-tagline">
                 Top brands at affordable prices and huge discounts available.Discover the latest trends in fashion with top Quality.
                </p>
                <Link to={"/shop"} className="shop-btn">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-bottom-show-section">
        <span>
          <p>
          At the House of Akash, we don’t just create clothes — we weave
          experiences.
        </p>
        <hr style={{border: "1px solid #666666ff"}}/>
        </span>
        <div className="show-home">
          <div className="show-img-home">
            <img src={show1} alt="" />
            <p>Top Quality Products</p>
          </div>
          <div className="show-img-home">
            <img src={show2} alt="" />
            <p>Available at Affordable Price</p>
          </div>
          <div className="show-img-home ">
            <img src={show3} alt="" />
            <p>Fast & Free Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
