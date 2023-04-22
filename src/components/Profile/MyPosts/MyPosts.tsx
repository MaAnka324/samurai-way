import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {ActionsTypes, addPostAC, ProfileType} from "../../../redux/state";


type MyPostsType = {
    messageForNewPost: string
    posts: ProfileType[]
    addPost: (val:string) => void
    changeNewTextCallback: (val: string) => void
    dispatch: (action: ActionsTypes) => void
}
const MyPosts = (props: MyPostsType) => {

    let postElement = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    const addPost = () => {
        // props.addPost(props.messageForNewPost)
        props.dispatch(addPostAC(props.messageForNewPost))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.messageForNewPost}
                    onChange={(e) => {
                        props.changeNewTextCallback(e.currentTarget.value)
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