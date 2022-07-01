import React from "react";
import "../../assets/css/trending.css";
import bannerImage from "../../assets/images/banner.png";
import Banner from "../../atoms/Banner";

const Trending = () => {
  return (
    <div className="trending__main">
      <div className="trending__banner">
        <img src={bannerImage} alt="Stranger Things" />
        <p>Trending</p>
      </div>
      <div className="trending__movies">
        <Banner />
      </div>
    </div>
  );
};

export default Trending;
