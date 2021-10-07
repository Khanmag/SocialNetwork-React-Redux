import React from 'react'
import Post from './MyPosts/Post'
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    let postsList = state.profileData.posts.map(p => <Post message={p.text} likes={p.likes}/>);
    return {
        postsList,
        newPostValue: state.profileData.textForNewPost
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => dispatch({type: 'ADD-POST', text})
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer