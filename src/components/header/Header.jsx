import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import searchx from "../../assets/search.png";

const Header = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="header__main">
      <div className="logo">
        <img src={logo} alt="insta play" />
      </div>
      <div className="searchbar" hidden={props.player? true :false}>
        <div className="input">
          <input
            type="text"
            placeholder="Search movies"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" /* onClick={() => refresh() */>
            <img src={searchx} alt="search icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
