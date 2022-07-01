import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; //state-management
import "./movies.css";
import axios from "axios";
import Header from "../components/header/Header";
import BackButton from "../assets/back.png";

const Movies = () => {
  const navigate = useNavigate();
  const [datax, setData] = useState([]);
  const { state } = useLocation();
  const { movie_id } = state;
  console.log(movie_id);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8c5825603819c6565d47f38f78f6d76d&language=en-US`
      )

      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <>
      <Header player={true} />

      <div className="mainx">
        <div className="mainx__left">
          <div className="top">
            <button onClick={() => navigate(-1)}>
              <img src={BackButton} alt="Back" />
            </button>
          </div>
          <h1>{datax.original_title}</h1>
          <p>Rating : &nbsp;{datax.vote_average / 2}/5</p>
          <p id="overview">{datax.overview}</p>
          <div className="release__date">
            <p>Release Date</p>
            <p id="release">{datax.release_date}</p>
          </div>
          <div className="release__date">
            <p>Original Language</p>
            <p id="release">
              {datax.original_language
                ? datax.original_language.toUpperCase()
                : ""}
            </p>
          </div>
        </div>
        {
          <div className="main__right">
            <img
              src={`https://image.tmdb.org/t/p/w500/${datax.backdrop_path}`}
              alt={datax.original_title}
            />
          </div>
        }
      </div>
    </>
  );
};

export default Movies;
