import React, { useState, useEffect } from "react";
import "../assets/css/banner.css";
import star from "../assets/images/star.png";
import play from "../assets/images/play.png";
import inf from "../assets/images/inf.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const Banner = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  //calling api for popular movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8c5825603819c6565d47f38f78f6d76d&language=en-US&page=${page.toString()}`
      )

      .then((data) => {
        setData(data.data.results);
        setPage(data.data.page);
      });
  }, [page]);

  return (
    <>
      <div className="banner__main">
        {data.map(({ title, vote_average, id, backdrop_path }) => {
          return (
            <div key={id} className="banner">
              <img
                src={`${
                  `https://image.tmdb.org/t/p/w500/${
                    backdrop_path === null ? "" : backdrop_path
                  }`
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : { inf }
                }`}
                alt="movie banner"
                onError={(event) => {
                  event.target.src = inf;
                }}
              />
              <div className="banner__bottom">
                <div className="banner__text">
                  <p className="banner__title">{title}</p>
                  <div className="banner__rating">
                    <img src={star} alt="star" />
                    <p>{vote_average / 2} / 5</p>
                  </div>
                </div>
                <div className="banner__play-btn">
                  <img
                    src={play}
                    alt="Play button"
                    onClick={() =>
                      navigate("/movies", { state: { movie_id: id } })
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="paging">
        <Typography>Page: {page}</Typography>
        <Pagination
          count={50}
          page={page}
          onChange={(event, value) => handleChange(event, value)}
        />
        {/* Tried using total no. of pages from the api but getting error when being requested. */}
      </div>
    </>
  );
};

export default Banner;
