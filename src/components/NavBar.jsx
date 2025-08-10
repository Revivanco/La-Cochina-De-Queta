import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo del restaurante" />
      </div>

      <div className={`hiddenLinks ${openLinks ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpenLinks(false)}>Home</Link>
        <Link to="/menu" onClick={() => setOpenLinks(false)}>Menu</Link>
        <Link to="/about" onClick={() => setOpenLinks(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpenLinks(false)}>Contact</Link>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={toggleNavBar} aria-label="Toggle menu">
          <ReorderSharpIcon />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
