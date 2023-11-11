import {Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Services from "./Pages/Services";
import Market from "./Pages/Market";
import Contact from "./Pages/Contact";
import Products from "./Components/Products";


function App() {
  return (
    <div dir="rtl" className="font-regu">
      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
