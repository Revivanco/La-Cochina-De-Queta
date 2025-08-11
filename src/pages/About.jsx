import React from "react";
import fotoQueta from "../assets/fotoQueta.png";

const About = () => {
  return (
    <div className="About">
      <div
        className="AboutTop"
        style={{
          backgroundImage: `url(${fotoQueta})`,
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          minHeight: "400px",
          maxHeight: "100vh",
        }}
      ></div>

      <style>
        {`
          @media (max-width: 600px) {
            .AboutTop {
              height: 60vh !important;
              background-position: center center !important;
              background-size: contain !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
