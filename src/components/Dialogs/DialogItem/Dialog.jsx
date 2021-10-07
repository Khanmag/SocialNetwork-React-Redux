import React from 'react'
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={cl.container}>
            <NavLink to={'/dialogs/' + props.id} className={cl.dialog} activeClassName={cl.active}>{props.name}</NavLink>
        </div>
        )
}
export default Dialog