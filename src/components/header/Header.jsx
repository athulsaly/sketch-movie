import React, { useState } from "react";

import "../../assets/css/header.css";
import logo from "../../assets/images/logo.png";
import searchx from "../../assets/images/search.png";
import { useNavigate } from "react-router-dom";
import { getSearched } from "../../api/crud";

const Header = (props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(["a"]);

  const searching = async () => {
    let data = await getSearched(search);

    setData(data ? data : []);
    navigate("/movies", { state: { movie_id: data.id } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searching();
    }
  };
  return (
    <>
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
              onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={() => searching()}>
              <img src={searchx} alt="search icon" />
            </button>
          </div>
        </div>
      </div>

      {(() => {
        if (data.length === 0) {
          return (
            <>
              {alert("MOVIE NOT FOUND!")}
              {(window.location = "/")}
            </>
          );
        } else return null;
      })()}
    </>
  );
};

export default Header;
