import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Preloader from "./components/Pre";
import Navbar from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.scss";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {load && <Preloader />} {/* Show the preloader while loading */}
      <main className="container">
        <Home />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect unknown routes to home */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
