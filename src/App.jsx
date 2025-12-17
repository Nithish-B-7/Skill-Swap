import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import OfferSkill from "./components/OfferSkill/OfferSkill";
import HireSkill from "./components/HireSkill/HireSkill";
import Profile from "./components/Profile/Profile";
import "./App.css";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-scroll"),
      smooth: true,
      lerp: 0.07,
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]);

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app" id="main-scroll" data-scroll-container>
      {!hideNavbar && <Navbar />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/offer-skill" element={<OfferSkill />} />
          <Route path="/hire-skill" element={<HireSkill />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
