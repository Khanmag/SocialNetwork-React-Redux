import React from 'react'
import {getAuthUserData} from "./auth-reducer";


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON-INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const activeInitialized = () => ({type: 'ON-INITIALIZED'})
export const initializedApp = () => (dispatch) => {
    dispatch(getAuthUserData())
    .then( () => {
        dispatch(activeInitialized())
    })
}
export default appReducer