import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const timeline = useRef(gsap.timeline());

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
        <section id="main-bg" className="select-none before:!opacity-40 ">
          <Navbar timeline={timeline.current}/>
          <Routes>
            <Route path="/" element={<Home timeline={timeline.current}/>} />
            <Route path="/about" element={<About timeline={timeline.current}/>} />
            <Route path="/features" element={<About timeline={timeline.current}/>}/> 
            <Route path="/contact" element={<About timeline={timeline.current}/>}/>
          </Routes>
          <Footer />
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
