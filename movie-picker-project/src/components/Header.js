import React from "react";
import "./Header.css";
import LogoMoviePicker from "../assets/MoviePickerLogoGood.svg";

function Header() {
  return (
    <div className="Header">
      <div>
        <img src={LogoMoviePicker} className="popcorn-logo" alt="logo" />
        <h1>Movie Picker!</h1>
        <p>Your one stop location to pick a movie</p>
      </div>
    </div>
  );
}

export default Header;
