import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {AllActionsTypes, ProfileType} from "../../../redux/state";
import {addPostAC, changeNewTextAC, ProfileActionsTypes} from "../../../redux/profile-reducer";


type MyPostsType = {
    messageForNewPost: string
    posts: ProfileType[]

    dispatch: (action: ProfileActionsTypes) => void
}
const MyPosts = (props: MyPostsType) => {

    let postElement = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.messageForNewPost}
                    onChange={(e) => {
                        props.dispatch(changeNewTextAC(e.currentTarget.value))
                    }}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
                {/*{props.post.map(p => <div key={p.id}>{props.messageForNewPost}</div>)}*/}
            </div>
        </div>
    )
}

export default MyPosts