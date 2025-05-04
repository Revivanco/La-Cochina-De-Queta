import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';


const NavBar = () => {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavBar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="logo del restaurante" />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>

                <button onClick={toggleNavBar}>
                    <ReorderSharpIcon />
                </button>
            </div>

        </div>
    )
}

export default NavBar