import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './MyPosts.module.css'

import Post from "./Post/Post";
import {ProfileType} from "../../../redux/profile-reducer";


type MyPostsType = {
    addPost: () => void
    posts: ProfileType[]
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    messageForNewPost: string
}
const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.addPost()
    }

    let postElement = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.messageForNewPost}
                    onChange={props.onChange}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts