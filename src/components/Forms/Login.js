import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createFieldTeg, Input} from "../common/FormControls/FormControls";
import {requiredField} from "../Utilits/Validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import cl from '../common/FormControls/FormControls.module.css'


const Login = ({login, isAuth}) => {
    let onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }
    if  (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
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
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth})
export default connect( mapStateToProps, {login})(Login)