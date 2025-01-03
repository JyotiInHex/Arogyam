import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import Header from "./components/header/Header";


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
        <main id="main-bg"  className="bg-blue-50 px-14 py-8 select-none before:!opacity-40 ">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
    // {/* #fe7f18 */}
    // {/* #435a65 */}
    // {/* #263238 */}
  );
};

export default App;
