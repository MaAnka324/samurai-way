import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import exp from "constants";
import {MyPostsType} from "../../../redux/state";




const MyPosts = (props:MyPostsType) => {

    // let post = [
    //     {id: 1, message: 'Hello', likesCount: 12},
    //     {id: 2, message: 'How are you?', likesCount: 11},
    // ]

    let postElement = props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef()


    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    // let addPost = () => {
    //     let text = newPostElement.current.value
    //     alert(text)
    // }
//
    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea
                        ref={newPostElement}></textarea>
                    <button
                        onClick={addPost}

                    >Add post</button>
                </div>
                <div className={s.posts}>
                    {postElement}
                    {props.post.map(p => <div key={p.id}></div>)}
                </div>
            </div>
    )
}

export default MyPosts