import React from "react";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex align-items-center home">
<div>
<h1 className="fw-bold home-text1">We Take Solution for the</h1>
        <h1 className="fw-bold home-text2">NEXT LEVEL</h1>
        <p className="fw-bold">Learn more about us +</p>
</div>
      </div>
    </div>
  );
};

export default Home;
