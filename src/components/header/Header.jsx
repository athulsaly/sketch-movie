import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import logo from "../../assets/logo.png";
import searchx from "../../assets/search.png";
import { useNavigate } from "react-router-dom";
import {getSearched} from "../../api/crud"


const Header = (props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searching = async () => {
    let data = await getSearched(search)
 
    setData(data ? data : [])
    navigate("/movies", { state: { movie_id: data.id } })
  }

  return (
    <div className="header__main">
      <div className="logo">
        <img src={logo} alt="insta play" />
      </div>
      <div className="searchbar" hidden={props.player ? true : false}>
        <div className="input">
          <input
            type="text"
            placeholder="Search movies"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={() => searching()}>
            <img src={searchx} alt="search icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
