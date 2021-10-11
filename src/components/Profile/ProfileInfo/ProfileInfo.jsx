import React, {useState} from 'react'
import cl from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWH from "./ProfileStatusWithHooks";
import userPhoto from "../../../images/SixWayMan.png"
import ProfileDescriptionForm from "./ProfileDescriptionForm";
import facebook from "../../../images/facebookIcon.png"
import website from "../../../images/websiteIcon.png"
import vk from "../../../images/vkIcon.png"
import twitter from "../../../images/twitterIcon.png"
import instagram from "../../../images/instagramIcon.png"
import github from "../../../images/githubIcon.png"
import mainlink from "../../../images/mainlinkIcon.png"
import youtube from "../../../images/youtubeIcon.png"

const ProfileInfo = React.memo(({isOwner,...props}) => {

    let [editModeValue, setEditMode] = useState((false));
    const [addPhotoMode, toggleAddPhotoMode] = useState(false);
    // useEffect( () => {
    // }, props.profile);

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
            toggleAddPhotoMode(false)
        }
    };
    let onSubmitDescription = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    };

    return (
        <div className={cl.mainContainer}>
            <div>
                <div>
                    <img className={cl.profileImage} alt={" "} src={props.profile.photos.large || userPhoto}/>
                </div>

                <div>
                    {isOwner && addPhotoMode && <input type={'file'} onChange={onMainPhotoSelected} />}
                    {isOwner && !addPhotoMode && <button onClick={() => toggleAddPhotoMode(true)}>change photo</button>}
                </div>

                < ProfileStatusWH isOwner={isOwner} statusValue={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                {editModeValue ? <ProfileDescriptionForm profile={props.profile}
                                                         onSubmit={onSubmitDescription} initialValues={props.profile}/>
                : <ProfileDescription profile={props.profile} isOwner={isOwner} setEditMode={() => setEditMode(true)}/>}
            </div>
            </div>

    )
});

const ProfileDescription = ({profile, isOwner, setEditMode}) => {
    let linkPhotos = [facebook, website, vk, twitter, instagram, youtube, github, mainlink];
    return (
        <div className={cl.descr}>
            <div>
                <b>{profile.lookingForAJob && "Looking for a job"}</b>
            </div>
            {
                profile.lookingForAJob && <div>
                    <p> <b>Hard Skills:</b> {profile.lookingForAJobDescription}</p>
                </div>
            }
            <div>
                {profile.aboutMe && <div>
                       <p> <b>AboutMe:</b> {profile.aboutMe}</p>
                    </div>}
            </div>

            <div className={cl.contactsBlock}>
                <h3>Contacts</h3>
                <Contacts contacts={profile.contacts} linkPhotos={linkPhotos}/>
            </div>
            {isOwner && <div>
                <button onClick={setEditMode}>edit</button>
            </div>}

        </div>
    )
};


export const Contacts = ({linkPhotos, contacts}) => {
    return <div className={cl.contactsList}>
        {Object.keys(contacts).map((item, index) => {
            let linksStyle = contacts[item] ? cl.linkImage : (cl.linkImage + " " + cl.noneLink);
            return <a className={linksStyle}
                      style={{backgroundImage: `url("${linkPhotos[index]}")`}} target={"_blank"} href={contacts[item]}></a>
        })}
    </div>
};

export default ProfileInfo