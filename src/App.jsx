import React from "react";
import "./App.css";
import HomePage from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
};

export default App;
