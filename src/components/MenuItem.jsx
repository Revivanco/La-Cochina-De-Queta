import React from "react";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "auto",       
          maxHeight: "200px",   
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <h1 style={{ padding: "0 20px" }}>{name}</h1>
      <p style={{ padding: "0 20px", marginTop: "-10px" }}>{price}</p>
    </div>
  );
};

export default MenuItem;
