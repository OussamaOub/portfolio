// import React from "react";
import NavBar from "../components/NavBar";
// import Home from "../components/Home";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Landing() {
  return (
    <div className="custombg">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
