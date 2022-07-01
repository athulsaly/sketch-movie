import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Trending from "../components/trending/Trending";
import "./home.css";
const Home = () => {
  return (
    <div className="main">
      <Header />
      <Trending />
        <Footer />
    </div>
  );
};

export default Home;
