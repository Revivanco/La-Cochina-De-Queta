import React from "react";
import { MenuList } from "../Helpers/MenuList"
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"


const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Nuestro Menú</h1>
            <div className="menuList">
                {MenuList.map((item, index) => (
                    <MenuItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};


export default Menu