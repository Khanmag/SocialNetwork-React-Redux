import React from 'react'
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className={cl.header}>
      <img alt={""} src='https://s3.amazonaws.com/static.hackingui.com/2014/11/side-img-solo.png'/>
        {/*<div className={cl.empty}> empty </div>*/}
      <div className={cl.loginBlock}>
          {props.isAuth
              ? <div className={cl.authUserBlock}>
                  <span className={cl.loginName}>{props.login}</span>
                  <button onClick={props.logout}>Log Out</button>
              </div>
              : <NavLink to={'/login'}>Log In</NavLink>
          }
      </div>
    </header>
    )
    
};
export default Header;


