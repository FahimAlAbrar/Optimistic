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
import Blog from "./components/Blog/Blog";
import Service_Details from "./components/Services/Service_Details/Service_Details";
import Join_Our_Mission from "./components/Mission_Vission/Join_Our_Mission/Join_Our_Mission";
import ScrollToTop from "./components/Navbar/ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission_Vission />} />
        <Route path="/join-our-mission-details" element={<Join_Our_Mission />} />
        <Route path="/services" element={<Services />} />
         <Route path="/services/:slug" element={<Service_Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>

      
      <Footer/>
    </div>
  );
};

export default App;