import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero";
import Footer from "./Footer";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
