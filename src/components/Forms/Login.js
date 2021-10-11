import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {requiredField} from "../Utilits/Validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import cl from '../common/FormControls/FormControls.module.css'


const Login = ({login, isAuth, captchaURL}) => {
    let onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if  (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input} />Remember ME
            </div>
            {error && <div className={cl.formSummaryError}>
                {error}
            </div>}
            {
                captchaURL && <div>
                    <img src={captchaURL} alt={""}/>
                    {createField("", "captcha", [requiredField], Input)}
                </div>
            }
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
});
export default connect( mapStateToProps, {login})(Login)