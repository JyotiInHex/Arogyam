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

const Cursor = React.forwardRef((_, ref) => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursorSize = 25 * 16; // Assuming you want a size of 25rem
      gsap.to(ref.current, {
        left: e.clientX - cursorSize / 2,
        top: e.clientY - cursorSize / 2,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="w-[25rem] h-[25rem] bg-[#bd4564] rounded-full fixed top-0 left-0 pointer-events-none -z-[1] mix-blend-difference blur-[5rem] opacity-20"
    />
  );
});

const App = () => {
  const cursorRef = useRef(null);
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
        <section id="main-bg" className="select-none before:!opacity-40">
          <Cursor ref={cursorRef} />
          <Navbar timeline={timeline.current}/>
          <Routes>
            <Route path="/" element={<Home timeline={timeline.current}/>} />
            <Route path="/about" element={<About timeline={timeline.current}/>} />
            {/* <Route path="/features" element={<About timeline={timeline.current}/>} />
            <Route path="/contact" element={<About timeline={timeline.current}/>} /> */}
          </Routes>
          <Footer />
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
