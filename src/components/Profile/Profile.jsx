import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    return (
        <div className>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            {/*<MyPostsContainer store={props.store}/>*/}
        </div>
    )
}
export default Profile