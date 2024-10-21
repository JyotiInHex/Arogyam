import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./pages/about";
import Footer from "./components/footer";
import Lenis from "lenis";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <React.Fragment>
        <section id="main-bg" className="select-none before:!opacity-40">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/features" element={<About />} />
            <Route path="/contact" element={<About />} /> */}
          </Routes>
          <Footer />
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
