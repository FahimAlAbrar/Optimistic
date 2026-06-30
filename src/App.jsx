import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home"
import About from "./components/About/About";
import Mission_Vission from "./components/Mission_Vission/Mission_Vission";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission_Vission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>

      
      <Footer/>
    </div>
  );
};

export default App;