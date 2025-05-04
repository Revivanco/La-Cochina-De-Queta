import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
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

                <button>
                    <ReorderSharpIcon />
                </button>
            </div>

        </div>
    )
}

export default NavBar