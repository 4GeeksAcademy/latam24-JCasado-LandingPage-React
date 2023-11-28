import React from "react";
import Navbar from "./Navbar.jsx";
import Heather from "./Heather";
import Footer from "./Footer";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heather />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
