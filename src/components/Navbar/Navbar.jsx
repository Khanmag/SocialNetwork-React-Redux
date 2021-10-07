import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
              <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
              <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div>
              <NavLink to="/users">Users</NavLink>
            </div>
            <div>
              <a href="/music">Music</a>
            </div>
            <div>
              <a href="/setting">Settings</a>
            </div>
            <div className={classes.friendsBlock}>
                <a href="/setting">Friends</a>
                <div className={classes.friendsImg}>
                    <img src={'https://uprostim.com/wp-content/uploads/2021/03/saske-uchiha_00209.jpg'}/>
                    <img src={'https://i.pinimg.com/originals/a1/5c/66/a15c660392c37658a752e6456b3a5956.jpg'}/>
                    <img src={'https://i.pinimg.com/originals/59/be/41/59be41699dfeecfad8d57fa520f0b9fc.jpg'}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;