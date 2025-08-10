// src/pages/Home.jsx
import React from "react";
import { Link } from 'react-router-dom';
import BannerImage from "../assets/imagenCochinita.png";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>La Cochina De Queta</h1>
                <p>¡Tradición que se deshace en tu boca!</p>
                <Link to="/menu">
                    <button>Ordena ahora</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
