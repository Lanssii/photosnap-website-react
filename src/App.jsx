import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./views/Home.jsx";
import Features from "./views/Features.jsx";
import Pricing from "./views/Pricing.jsx";
import Stories from "./views/Stories.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./assets/main-logo.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header
          title="PHOTOSNAP"
          navText1="STORIES"
          navText2="FEATURES"
          navText3="PRICING"
          inviteBtn="GET AN INVITE"
          imgLogo={logo}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <Footer
          title="PHOTOSNAP"
          navText1="HOME"
          navText2="STORIES"
          navText3="FEATURES"
          navText4="PRICING"
          inviteBtn="GET AN INVITE"
          copyright="Copyright 2019. All Rights Reserved"
          imgLogo={logo}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
