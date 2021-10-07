import React from 'react'
import cl from './Messages.module.css'

const Message = (props) => {
    if (props.isMy) {
        return (
            <div className={`${cl.box} ${cl.isMy}`}>
                <p className={cl.text}>{props.text}</p>
            </div>
        )
    } else {
        return (
            <div className={cl.box}>
                <p className={cl.text}>{props.text}</p>
            </div>
        )
    }

}
export default Message