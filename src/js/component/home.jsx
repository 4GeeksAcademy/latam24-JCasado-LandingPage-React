import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer";
import Card from "./card.jsx";

const Home = () => {
  return (
    
	<div className=" container-fluid">
      <div className="row">
        <div className="col p-0">
          <Navbar />
        </div>
      </div>
      
	  <div className="container-fluid w-75">
        <div className="row">
          <div className="col p-0">
            <div className="container mt-2"></div>

        <Card />
        <Card />
        <Card />
        <Card />
      
	  </div>
      
	  <div className="row">
        <div className="col p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
