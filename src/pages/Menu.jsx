import React from "react";
import { MenuList } from "../Helpers/MenuList"
import { MenuItem } from "@mui/material";


const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTilte">Nuestro Menu</h1>
            <div className="menuList">{MenuList.map((MenuItem, key) => {
                return <div>{MenuItem.name}</div>;
            })}</div>
        </div>
    )
};

export default Menu