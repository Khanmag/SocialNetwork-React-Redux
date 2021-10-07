import React from 'react'
import Dialog from "./DialogItem/Dialog";
import Dialogs from "./Dialogs";
import Message from "./Message/Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    let dialogsList = state.dialogsData.dialogsList.map( user => (<Dialog name={user.name} id={user.id} />))
    let messagesWithOne = state.dialogsData.dialogsList[0].messages.map(sms => (<Message id={sms.id} isMy={sms.isMy} text={sms.text}/>))
    return {
        dialogsList,
        messagesWithOne,
        newMessageValue: state.dialogsData.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {addNewMessage: (text) => dispatch({type: 'ADD-MESSAGE', text})}
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)