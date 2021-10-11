import cl from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {Contacts} from "./ProfileInfo";
import {reduxForm} from "redux-form";
import facebook from "../../../images/facebookIcon.png";
import website from "../../../images/websiteIcon.png";
import vk from "../../../images/vkIcon.png";
import twitter from "../../../images/twitterIcon.png";
import instagram from "../../../images/instagramIcon.png";
import youtube from "../../../images/youtubeIcon.png";
import github from "../../../images/githubIcon.png";
import mainlink from "../../../images/mainlinkIcon.png";

const ProfileDescriptionForm = ({profile, handleSubmit, error}) => {
    let linkPhotos = [facebook, website, vk, twitter, instagram, youtube, github, mainlink];
    return (
        <form onSubmit={handleSubmit} className={cl.descr}>
            <div className={cl.niceInput}>
                {createField("Full name", 'fullName', [], Input)}
            </div>

            <div className={cl.onOneLineDiv}>
            <b>Looking for a job?</b>
            {createField("", 'lookingForAJob', [], Input,
                {type: "checkbox"}, )}
            </div>
            <div className={cl.longTextBlock}>
                <b>My professional skills</b>
            {createField("", 'lookingForAJobDescription', [], Textarea,
                "My professional skills")}
            </div>
            <div className={cl.longTextBlock}>
                <b>About me</b>
                {createField("", 'aboutMe', [], Textarea,"About me")}
            </div>


            <div className={cl.contactsBlock}>
            <b>Contacts</b>
            {Object.keys(profile.contacts).map((item, index) => {
                return <div key={item} className={cl.chagingContacts}>
                    <img src={linkPhotos[index]}/>{createField(item, "contacts." + item, [], Input)}
                </div>
            })}
            </div>
            {error && <div>
                {error}
            </div>}
            <button>save</button>
        </form>
    )
};
export default reduxForm({form: 'profileDescription'})(ProfileDescriptionForm)