import React, { useState, useEffect } from "react";
import "./banner.css";
import star from "../assets/star.png";
import play from "../assets/play.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //calling api for popular movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8c5825603819c6565d47f38f78f6d76d&language=en-US&page=1`
      )

      .then((data) => {
        setData(data.data.results);
      });
  }, []);


  return (
    <>
      <div className="banner__main">
        {data.map(({ title, vote_average, id, backdrop_path }) => {
          return (
            <div key={id} className="banner">
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt="movie banner"
              />
              <div className="banner__bottom">
                <div className="banner__text">
                  <p className="banner__title">{title}</p>
                  <div className="banner__rating">
                    <img src={star} alt="star" />
                    <p>{vote_average/2} / 5</p>
                  </div>
                </div>
                <div className="banner__play-btn">
                  <img
                    src={play}
                    alt="Play button"
                    onClick={() => navigate("/movies", { state: { movie_id: id } })}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Banner;
