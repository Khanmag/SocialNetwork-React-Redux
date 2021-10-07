import React from 'react'
import cl from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWH from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let unpackContacts = (contacts) => {
        let array = []
        for (let contact in contacts) {
            if (contacts.contact) array.push(<li><a href={contacts.contact}>{contact}</a></li>)
        }
        return array
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <img className={cl.topImage} alt={' '}*/}
            {/*         src="https://pbs.twimg.com/profile_banners/1227823646233767936/1600997930/1500x500"/>*/}
            {/*</div>*/}
            <div>
                <img alt={" "} src={props.profile.photos.large}/>
            </div>
            <div>
                <span>
                    Name: {props.profile.fullName}
                </span>
            </div>
            < ProfileStatusWH status={props.status} updateStatus={props.updateStatus}/>
            <div className={cl.descr}>
                <h4>{props.profile.aboutMe}</h4>
                <h3>Contacts</h3>
                <ul>
                    {unpackContacts(props.profile.contacts)}
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo