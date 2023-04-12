import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import exp from "constants";
import {ProfileType} from "../../../redux/state";


type MyPostsType = {
    messageForNewPost: string
    posts: ProfileType[]
    addPost: (val:string) => void
    changeNewTextCallback: (val: string) => void
}
const MyPosts = (props: MyPostsType) => {

    let postElement = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost(props.messageForNewPost)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={(e) => {
                        props.changeNewTextCallback(e.currentTarget.value)
                    }}

                    value={props.messageForNewPost}
                />
                <button
                    onClick={addPost}
                >Add post
                </button>
            </div>
            <div className={s.posts}>
                {postElement}
                {/*{props.post.map(p => <div key={p.id}>{props.messageForNewPost}</div>)}*/}
            </div>
        </div>
    )
}

export default MyPosts