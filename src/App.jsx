import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
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
          {/* <Navbar timeline={timeline.current} /> */}
          <Routes>
            <Route path="/" element={<Home timeline={timeline.current} />} />
          </Routes>
          {/* <Footer /> */}
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
