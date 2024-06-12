import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/OurServices"
import About from "./pages/About";
import Contacts from "./components/Contacts"
import Partnerships from "./components/Partnerships";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={Home} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/partnerships" element={<Partnerships />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
