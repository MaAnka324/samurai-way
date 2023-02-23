import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import exp from "constants";


const MyPosts = () => {

    let post = [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ]

    let postElement = post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
    )
}

export default MyPosts