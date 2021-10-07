import React from 'react'
import cl from './Dialogs.module.css'
import NewMessageForm from '../Forms/Message'

const Dialogs = (props) => {

    let onSendMessage = (formData) => props.addNewMessage(formData.messageText)

    return (
        <div className={cl.dialogsFull}>

            <div className={cl.dialogsList}>
                {props.dialogsList}
            </div>

            <div className={cl.messages}>
                <div>{props.messagesWithOne}</div>
                < NewMessageForm onSubmit={onSendMessage} />
            </div>

        </div>
    )
}

export default Dialogs