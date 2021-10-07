import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, minLenghtCreator, requiredField} from "../Utilits/Validators";
import {Textarea} from "../common/FormControls/FormControls";

let maxLenght = maxLenghtCreator(10)
let minLenght = minLenghtCreator(10)

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'new post text..'} name={'newPostText'} component={Textarea}
                   validate={ [ requiredField, maxLenght ] }/>
            <button>Add</button>
        </form>
    )
}
export default reduxForm({form: 'newPost'})(AddPost)