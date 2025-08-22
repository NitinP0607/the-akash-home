import React from "react";
import "./Shop.css";

import pro_1 from "../assets/product-1.jpg";
import pro_2 from "../assets/product-2.jpg";
import pro_3 from "../assets/product-3.jpg";
import pro_4 from "../assets/product-4.jpg";
import pro_5 from "../assets/product-5.jpg";
import pro_6 from "../assets/product-6.jpg";
import pro_7 from "../assets/product-7.jpg";
import pro_8 from "../assets/product-8.jpg";
import pro_9 from "../assets/product-9.jpg";
import pro_10 from "../assets/product-10.jpg";
import pro_11 from "../assets/product-11.jpg";
import pro_12 from "../assets/product-12.jpg";
import pro_13 from "../assets/product-13.jpg";
import pro_14 from "../assets/product-14.jpg";
import pro_15 from "../assets/product-15.jpg";
import pro_16 from "../assets/product-16.jpg";
import pro_17 from "../assets/product-17.jpg";
import pro_18 from "../assets/product-18.jpg";
import pro_19 from "../assets/product-19.jpg";
import pro_20 from "../assets/product-20.jpg";
import pro_21 from "../assets/product-21.jpg";

// Products data in array
const products = [
  { id: 1, img: pro_1, name: "Product Name", price: 299, offer: "Unlock the perfect deal: Buy 2, and we'll throw in 1 more at no cost!" },
  { id: 2, img: pro_2, name: "Product Name", price: 299, offer: "More for less: Purchase 2 items and enjoy a free third item on us!" },
  { id: 3, img: pro_3, name: "Product Name", price: 299, offer: "Take your shopping spree to the next level with 2 items and get 1 free!" },
  { id: 4, img: pro_4, name: "Product Name", price: 299, offer: "Don't settle for less—buy two, and we'll give you a bonus item for free!" },
  { id: 5, img: pro_5, name: "Product Name", price: 299, offer: "Score a free gift with every two items you buy. Shop now!" },
  { id: 6, img: pro_6, name: "Product Name", price: 299, offer: "Get the ultimate deal: Two items for the price of two, and a third for free!" },
  { id: 7, img: pro_7, name: "Product Name", price: 299, offer: "Because you deserve more: Buy two items and get an extra one for free!" },
  { id: 8, img: pro_8, name: "Product Name", price: 299, offer: "Triple your shopping fun: Buy two items, and we’ll give you a third free!" },
  { id: 9, img: pro_9, name: "Product Name", price: 299, offer: "More products, same price—grab 2 and get 1 on us!" },
  { id: 10, img: pro_10, name: "Product Name", price: 299, offer: "Your cart just got bigger: Buy two and get one more for absolutely nothing!" },
  { id: 11, img: pro_11, name: "Product Name", price: 299, offer: "Take advantage of our special deal—buy two and get one more completely free!" },
  { id: 12, img: pro_12, name: "Product Name", price: 299, offer: "Get one on us! Buy two items today and enjoy a free third one!" },
  { id: 13, img: pro_13, name: "Product Name", price: 299, offer: "Enjoy a freebie with every two items—shop and save now!" },
  { id: 14, img: pro_14, name: "Product Name", price: 299, offer: "Double up on savings: Buy 2 items and claim your free third item!" },
  { id: 15, img: pro_15, name: "Product Name", price: 299, offer: "Why choose when you can have more? Buy two, get one more free!" },
  { id: 16, img: pro_16, name: "Product Name", price: 299, offer: "Get more bang for your buck: Purchase two items and get a bonus item for free!" },
  { id: 17, img: pro_17, name: "Product Name", price: 299, offer: "Shop smart: Buy two and take home a third item completely free!" },
  { id: 18, img: pro_18, name: "Product Name", price: 299, offer: "Don’t miss this: Buy two, and your third item is on us!" },
  { id: 19, img: pro_19, name: "Product Name", price: 299, offer: "Fill your cart with savings: Two items equals one free bonus gift!" },
  { id: 20, img: pro_20, name: "Product Name", price: 299, offer: "Shop now and grab a free item when you buy two. Limited time offer!" },
  { id: 21, img: pro_21, name: "Product Name", price: 299, offer: "More items, more savings: Buy two today and get one extra free!" },
];

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shop-quote">
        <h1 className="shop-title">Shop Collection</h1>
        <p className="shop-subtitle">Top brands at affordable prices</p>
      </div>

      <div className="shop-sections">
        <p className="shop-header">Best Sellers and Trending Collections for you</p>
        <div className="shop-section">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="order-details">
                <div className="name-rating">
                  <p>{product.name}</p>
                  <div className="stars">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                  </div>
                </div>
                <div className="order-rate">
                  <p>Rs.{product.price}</p>
                  <button>Order Now</button>
                </div>
              </div>
              <p>{product.offer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
