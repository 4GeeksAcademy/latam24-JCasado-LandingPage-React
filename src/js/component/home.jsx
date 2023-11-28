import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Card />
      <Card />
      <Card />
      <Card />

      <Footer />
    </div>
  );
};

export default Home;
