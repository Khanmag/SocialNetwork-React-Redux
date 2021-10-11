import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let setUserProfileAction = 'profileData/SET-USER-PROFILE';
let setStatusAction = 'profileData/SET-STATUS';
let savePhotoSuccessAC = 'profileData/SAVE_PHOTO'

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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost = {
                id: state.posts.length,
                text: action.text,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case setUserProfileAction:
            return {
                ...state,
                profile: action.profile
            };
        case setStatusAction:
            return {
                ...state,
                status: action.status
            };
        case savePhotoSuccessAC:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.file}}
            };
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({type: setUserProfileAction, profile})
export const setStatus = (status) => ({type: setStatusAction, status});
export const savePhotoSuccess = (photos) => ({type: savePhotoSuccessAC, photos})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
};


export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) dispatch(setStatus(status))
};
export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photo);
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(photo))
};
export const saveProfile = (formData) => async (dispatch, getState) => {
    let id = getState().auth.userId;
    let response = await profileAPI.saveProfile(formData);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(id))
    } else {
        dispatch(stopSubmit('profileDescription', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
};

export default profileReducer;