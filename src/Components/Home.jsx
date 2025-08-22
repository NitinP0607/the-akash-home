import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../assets/Akash_1.jpg";
import img2 from "../assets/Akash_2.jpg";
import img4 from "../assets/Akash_4.jpg";
import img20 from "../assets/Akash_20.jpg";
import show1 from "../assets/home-pic-vertical1.jpg";
import show2 from "../assets/home-pic-vertical2.jpg";
import show3 from "../assets/home-pic-vertical3.jpg";
import sale from "../assets/sale-pic.jpg";
import img7 from "../assets/Akash_7.jpg";
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
                  Top brands at affordable prices and huge discounts
                  available.Discover the latest trends in fashion with top
                  Quality.
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
          <hr style={{ border: "1px solid #666666ff" }} />
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
        <div className="sale-home-part">
          <img src={sale} alt="" />
          <p className="sale-text">Get 20% off on all products</p>
          <div className="show-last">
            <p>
              At The House of Akash, fashion is more than just clothing — it’s
              an experience, a statement, and a lifestyle. Our vision is to
              bring together timeless style and modern trends, creating a
              collection that celebrates individuality while ensuring comfort
              and quality. Every product in our collection is handpicked with
              care, combining premium fabrics, innovative designs, and attention
              to detail, so you can look your best without compromising on
              affordability. We believe that great style should be accessible to
              everyone, which is why we provide top-quality products at prices
              you’ll love. From daily essentials to seasonal trends, from casual
              wear to statement pieces, our collection is designed to complement
              every occasion in your life. With fast delivery, exciting offers,
              and a promise of excellence, we strive to make your shopping
              journey not just simple but truly enjoyable Step into a world of
              endless choices with our Browse Collection, where every product is
              carefully selected to bring you the best in style, quality, and
              value. From everyday essentials to trending must-haves, our
              collection is designed to fit every lifestyle and occasion. We
              believe shopping should be simple, exciting, and rewarding—that’s
              why we bring together top-rated products at prices you’ll love.
              Whether you’re treating yourself or finding the perfect gift, our
              Browse Collection ensures you always have access to variety,
              affordability, and excellence in one place. Take your time,
              explore, and discover items that speak to your taste while making
              every purchase worth more.
            </p>
            <Link to="/shop">
              <img src={img7} alt="img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
