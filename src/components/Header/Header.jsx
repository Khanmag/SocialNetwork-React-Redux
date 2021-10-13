import React from 'react'
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";
import samirai from "../../images/samurai.png"

const Header = (props) => {
    return <header className={cl.header}>
            <div className={cl.logoBlock}></div>

            <div className={cl.loginBlock}>
                <div className={cl.SingInOrOut}>
                    {props.isAuth ? <button onClick={props.logout}>Log Out</button>
                        : <button><NavLink to={'/login'}>Log In</NavLink></button>}
                </div>
                <div className={cl.userImage}>
                    <img src={props.profile ? props.profile.photos.small : samirai}/>
                </div>
            </div>
        </header>
};


export default Header;


