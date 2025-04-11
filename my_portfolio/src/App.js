import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Navbar />
      <Projects />
      <Skills />
      <Testimonials />
    </div>
  );
}

export default App;
