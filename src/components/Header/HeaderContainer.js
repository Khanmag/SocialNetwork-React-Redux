import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logout,} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profile: state.profileData.profile,
})
export default connect(mapStateToProps, {logout})(HeaderContainer)

