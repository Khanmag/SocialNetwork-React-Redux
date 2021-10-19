import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Forms/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import NotMountYet from "./components/common/NotMountYet";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     alert(promiseRejectionEvent)
    // };
    componentDidMount() {
        this.props.initializedApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors )
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors )
    }

    render() {
        if (!this.props.initialized) return < Preloader />;

        return (
                <div className="app-wrapper">

                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={"/profile"}/> }/>
                            <Route path='/dialogs' render={() => {
                                return <React.Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/music' render={() => <NotMountYet/>}/>
                            <Route path='/setting' render={() => <NotMountYet/>}/>
                            <Route path='*' render={() => <Login/>}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

let mapStateToProps = (state) => ({initialized: state.app.initialized});

let AppContainer = compose(connect(mapStateToProps, {initializedApp}), withRouter)(App);

const MainApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
};

export default MainApp