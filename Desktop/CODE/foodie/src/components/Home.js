import React from "react";
import AppFooter from "./AppFooter";
import Contact from "./Contact";
import Favorites from "./favorites";
import Hero from "./Hero";
import Navbar from "./Navbar";

import Patners from "./TrustedPatners";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Patners />
      <Favorites />
      <Contact />
      <AppFooter />
    </div>
  );
};

export default Home;
