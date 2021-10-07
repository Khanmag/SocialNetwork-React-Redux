import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLenghtCreator, requiredField} from "../Utilits/Validators";

let maxLenght = maxLenghtCreator(100)
const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Hi human!'} component={Textarea} name={'messageText'}
            validate={[requiredField, maxLenght]} />
            <button>Send</button>
        </form>
    )
}
const AddMessageForm = reduxForm({form: 'message'})(MessageForm)
export default AddMessageForm

