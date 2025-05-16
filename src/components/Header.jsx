import React from "react";
import LogoSpotify from "../assets/Pasta Assets com Database e Logo/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href="">
        <img src={LogoSpotify} alt="Logo do Spotify" />
      </a>

      <a className="header__link" href="">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
