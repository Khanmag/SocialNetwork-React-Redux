import React from 'react'
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            //Push guest profile here if i want
            if (!userId) this.props.history.push('/login')
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
        // if (this.props.profile.photos.large !== prevProps.profile.photos.large) this.refreshProfile()
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} saveProfile={this.props.saveProfile}
                        isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                        status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    isAuth: state.auth.isAuth,
    status: state.profileData.status,
    authUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)
(ProfileContainer)