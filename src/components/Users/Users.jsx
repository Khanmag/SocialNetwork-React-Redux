import React from 'react'
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import cl from './Users.module.css'


let Users = ({onChangePages, currentPage, pagesCount, pagesSize,
                 users, followingProcess, unfollow, follow}) => {
    return (
        <div>
            <div>
                <Pagination onChangePages={onChangePages} currentPage={currentPage}
                            pagesSize={pagesSize} pagesCount={pagesCount}/>
            </div>
            <div className={cl.usersContainer}>
                {
                    users.map(user => (
                        <User user={user} followingProcess={followingProcess}
                              unfollow={unfollow} follow={follow}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Users