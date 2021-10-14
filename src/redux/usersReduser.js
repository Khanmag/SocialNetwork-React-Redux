import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/Utilits/objectHelpers";

let FOLLOW = 'users/FOLLOW'
let UNFOLLOW = 'users/FOLLOW'
let SET_USERS = 'users/SET_USERS'
let SET_PAGES_COUNT = 'users/SET_PAGES_COUNT'
let SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
let TOGGLE_FOLLOWING_PROCESS = 'users/TOGGLE_FOLLOWING_PROCESS'

let initialState = {
    users: [],
    pagesSize: 24,
    pagesCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProcess: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: [...updateObjectInArray(state.users, "id", action.userId, {followed: true})]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...updateObjectInArray(state.users, "id", action.userId, {followed: false})],
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_PAGES_COUNT:
            return {
                ...state,
                pagesCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
            followingProcess: action.isFetching
                ? [...state.followingProcess, action.userId]
                : state.followingProcess.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPagesCount = (count) => ({type: SET_PAGES_COUNT, count})
export const setCurrentPage = (current) => ({type: SET_CURRENT_PAGE, current})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROCESS ,isFetching,  userId})

export const requestUsers = (currentPage, pagesSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pagesSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setPagesCount(data.totalCount))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, userId))
    let data = await usersAPI.follow(userId)
    if (data.resultCode == 0) dispatch(followSuccess(userId))
    dispatch(toggleFollowingProcess(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode == 0) dispatch(unfollowSuccess(userId))
    dispatch(toggleFollowingProcess(false, userId))
}

export default userReducer;