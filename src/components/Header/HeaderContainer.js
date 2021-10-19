import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logout,} from "../../redux/auth-reducer";
import {getUserPhoto} from "../../redux/profileReducer";


class HeaderContainer extends React.Component {

    render() {
        let image;
        if (this.props.isAuth) this.props.getUserPhoto(this.props.userId)
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    profile: state.profileData.profile,
    image: state.profileData.myPhoto
});
export default connect(mapStateToProps, {logout, getUserPhoto})(HeaderContainer)

