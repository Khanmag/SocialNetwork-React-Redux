import React from 'react'
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const setUserDataAction = 'auth/SET-USER-DATA';
const setCaptchaAC = 'auth/SET_CAPTCHA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserDataAction:
            return {
                ...state,
                ...action.payload,
            };
        case setCaptchaAC:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({type: setUserDataAction, payload: {userId, email, login, isAuth} });
export const setCaptcha = (captchaURL) => ({type: setCaptchaAC, payload: {captchaURL}});

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        return dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
    }
};

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}))
        }
    };
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const URL = response.data.url
    dispatch(setCaptcha(URL))
};

export default authReducer