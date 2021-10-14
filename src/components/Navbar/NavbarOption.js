import React from 'react'
import {NavLink} from "react-router-dom";
import cl from "./Navbar.module.css";

const NavbarOption = ({url, name, cssClass = cl.active }) => {
    return (
        <div className={cl.navbarOption}>
            <NavLink to={url} activeClassName={cssClass}>{name}</NavLink>
        </div>
    )
};
export default NavbarOption