import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLenghtCreator, requiredField} from "../Utilits/Validators";
import cl from "./Message.module.css"


let maxLenght = maxLenghtCreator(100);
const MessageForm = (props) => {
    return (
        <form className={cl.sendMessageForm} onSubmit={props.handleSubmit}>
            <Field placeholder={'Hi human!'} component={Textarea} name={'messageText'}
            validate={[requiredField, maxLenght]}
            />
            <button>Send</button>
        </form>
    )
}
const AddMessageForm = reduxForm({form: 'message'})(MessageForm)
export default AddMessageForm

