import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import ContactUs from "./components/contact/ContactUs";
import ResumeNew from "./components/Resume/ResumeNew";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumeNew />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;