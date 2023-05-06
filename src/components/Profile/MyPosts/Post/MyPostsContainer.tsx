 import React, {ChangeEvent} from 'react';
 import MyPosts from "../MyPosts";
 import {ProfileType} from "../../../../redux/state";
 import {addPostAC, changeNewTextAC, ProfileActionsTypes} from "../../../../redux/profile-reducer";

type MyPostsContainerType = {
    messageForNewPost: string
    posts: ProfileType[]
    dispatch: (action: ProfileActionsTypes) => void
}
const MyPostsContainer = (props: MyPostsContainerType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost))
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))}

    return (
        <MyPosts addPost={addPost}
                 posts={props.posts}
                 onChange={onChange}
                 messageForNewPost={props.messageForNewPost}
        />
    )
}

export default MyPostsContainer