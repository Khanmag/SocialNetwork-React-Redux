import React from 'react'
import cl from "./NotMountYet.module.css"

const NotMountYet = (props) => {
    return (
        <div className={cl.container}>
            <img src={"https://cross-crm.com/images/workflow-qm.png"}/>
            <span>Данный раздел вскоре будет доступен..</span>
        </div>
    )
};

export default NotMountYet