import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About.jsx";
import ServicesPage from "./components/Services/ServicesPage.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        {/* <Testimonial />
      <BlogsComp /> */}

        <Footer />
      </Router>
    </div>
  );
};

export default App;
