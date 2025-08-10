
import React from "react";
import fotoQueta from "../assets/fotoQueta.png";

const About = () => {
    return (
        <div className="About" style={{ width: "100%", textAlign: "center" }}>
            <img
                src={fotoQueta}
                alt="Foto de Queta"
                style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "100vh",
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

export default About;
