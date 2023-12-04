// import React from "react";
import NavBar from "../components/NavBar";
// import Home from "../components/Home";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}
