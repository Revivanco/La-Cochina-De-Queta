import React from "react";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
