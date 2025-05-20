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
                    height: "100vh"
                }}
            ></div>
        </div>
    );
};

export default About;
