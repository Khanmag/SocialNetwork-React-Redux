import React from 'react'
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({onChangePages, currentPage, pagesCount, pagesSize,
                 users, followingProcess, unfollow, follow}) => {
    return (
        <div>
            <Pagination onChangePages={onChangePages} currentPage={currentPage}
                        pagesSize={pagesSize} pagesCount={pagesCount} />

            {
                users.map(user => (
                    <User user={user} followingProcess={followingProcess}
                          unfollow={unfollow} follow={follow} />
                ))
            }
        </div>
    )
}
export default Users