import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Forms/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializedApp()
    }
    render() {
        if (!this.props.initialized) return < Preloader />

        return (
                <div className="app-wrapper">

                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/music'/>
                        <Route path='/setting'/>
                    </div>
                </div>
        );
    }
}

let mapStateToProps = (state) => ({initialized: state.app.initialized})

let AppContainer = compose(connect(mapStateToProps, {initializedApp}), withRouter)(App)

const MainApp = () => {
    return <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default MainApp