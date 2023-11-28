import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero";
import Card from "./Card.jsx";
import Footer from "./Footer";

const Home = () => 
{
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
