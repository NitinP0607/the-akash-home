import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Order from "./Components/Order";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
};

export default App;
