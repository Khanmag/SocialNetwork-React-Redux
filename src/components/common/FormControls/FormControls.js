import React from "react";
import cl from './FormControls.module.css'
import {Field} from "redux-form";
// import {requiredField} from "../../Utilits/Validators";

export const Input = ({input, meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};
export const Textarea = ({input, meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} validators={validators}
               component={component} {...props}
        />{text}
    </div>
);