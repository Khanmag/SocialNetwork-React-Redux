import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post'
import AddNewPostForm from '../../Forms/AddPostForm'

const MyPosts = (props) => {

    let onSaveNewPost = (formData) => {
        props.addNewPost(formData.newPostText)
    }
    return (
        <div>
            My post
            < AddNewPostForm onSubmit={onSaveNewPost} />

            {props.postsList}
        </div>
    )
}
export default MyPosts