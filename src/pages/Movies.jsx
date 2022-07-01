import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; //state-management
import "./movies.css";
import axios from "axios";
import Header from "../components/header/Header";

const Movies = () => {
  const navigate = useNavigate();
  /*   const [data, setData] = useState([]);
  const { state } = useLocation();
  const { movie_id } = state;
  console.log(movie_id)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8c5825603819c6565d47f38f78f6d76d&language=en-US`
      )

      .then((data) => {
        console.log(data.data)
        setData(data.data.results);
      });
  });
  console.log(data);
 */
  return (
    <>
      <Header player={true}/>
      <div>
        <h1>Contact Page</h1>
        <br />
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
};

export default Movies;
