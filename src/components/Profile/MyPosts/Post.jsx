import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.avatar}>
            <img src="https://pm1.narvii.com/6718/f52198b73c2d4fe35e1abfa1840ce5afda28b3cb_hq.jpg" alt="" />
            <div>{props.message}</div>
            <div>{props.likes} people like this</div>
        </div>
    )
}
export default Post