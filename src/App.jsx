import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import Login from "./auth/Login";

gsap.registerPlugin(ScrollTrigger);

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

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPass, setForgotPass] = useState(false);

  const handleCTAResponse = (e) => {
    const fromID = e.target.value;
   
    switch (fromID) {
      case "showLoginFrom":
        setShowLogin(true);
        setForgotPass(false);
        break;
      case "hideLoginFrom":
        setShowLogin(false);
        break;


      case "showSignupFrom":
        setShowLogin(false);
        setShowSignup(true);
        break;
      case "hideSignupFrom":
        setShowSignup(false);
        break;


      case "showForgotPass":
        setForgotPass(true);
        setShowLogin(false);
        break;
      case "showForgotPass":
        setForgotPass(false);
        break;


      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <main
          id="main-bg"
          className="relative bg-blue-50 py-8 select-none before:!opacity-40"
        >
          <Header onActionBtnClick={handleCTAResponse} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />

          {showLogin && <Login onActionBtnClick={handleCTAResponse}/>}
        </main>
      </React.Fragment>
    </BrowserRouter>
    // {/* #fe7f18 */}
    // {/* #435a65 */}
    // {/* #263238 */}
  );
};

export default App;
