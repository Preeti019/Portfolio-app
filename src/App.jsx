import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './theme.css';


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
