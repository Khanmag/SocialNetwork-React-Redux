import React from 'react'
import preloader from '../../../images/Preloader.svg'
import cl from "./Preloader.module.css"

let Preloader = (props) => {
    return <div className={cl.preloaderContainer}>
        <img src={preloader}/>
    </div>
}
export default Preloader