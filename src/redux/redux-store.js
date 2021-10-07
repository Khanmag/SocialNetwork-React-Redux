import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReduser from "./usersReduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
    usersData: usersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store