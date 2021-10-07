import {profileAPI, usersAPI} from "../api/api";

let setUserProfileAction = 'profileData/SET-USER-PROFILE'
let setStatusAction = 'profileData/SET-STATUS'

let initialState = {
    posts: [
        {
            id: 1,
            text: 'I am Naruto Uzumaki',
            likes: 10,
        },
        {
            id: 2,
            text: 'I will become Hocage!!',
            likes: 17,
        }
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost = {
                id: state.posts.length,
                text: action.text,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case setUserProfileAction:
            return {
                ...state,
                profile: action.profile
            }
        case setStatusAction:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const setUserProfile = (profile) => ({type: setUserProfileAction, profile})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const setStatus = (status) => ({type: setStatusAction, status})

export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export default profileReducer;