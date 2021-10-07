import React from 'react'
import cl from './Users.module.css'
import userPhoto from '../../images/photoIfEmpty.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingProcess, unfollow, follow}) => {
    return <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small
                            : userPhoto} className={cl.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingProcess.some(id => id == user.id)}
                                  onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button disabled={followingProcess.some(id => id == user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>
                    }
                </div>
            </span>

        <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>

        <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
    </div>
}

export default User