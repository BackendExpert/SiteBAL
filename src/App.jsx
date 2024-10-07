import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar";
import './App.css'
import Footer from "./components/Footer";
import Careers from "./pages/Careers/Careers";
import ChatButton from "./components/Defaults/ChatButton";
import Service from "./pages/Services/Service";
import AboutAs from "./pages/AboutUs/AboutAs";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and past a certain threshold, hide the NavBar
      setShowNavBar(false);
    } else {
      // If scrolling up, show the NavBar
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="">
      <BrowserRouter>
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Service" element={<Service /> } />
          <Route path="/AboutAs" element={<AboutAs /> } />
        </Routes>
        <Footer />
        <ChatButton /> {/* Add the ChatButton here to display on every page */}
      </BrowserRouter>
    </div>
  );
}
