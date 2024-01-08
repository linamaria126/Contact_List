import React from "react";
import { Navbar } from "../component/Navbar.jsx";
import "../../styles/home.css";
import Card from "../component/Card.jsx";

const Home = () => {
  return (
    <>
       <Navbar /> 
      <div className="fondo">
        <Card />
      </div>
    </>
  );
};

export default Home;
