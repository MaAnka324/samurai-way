import React from 'react';
import s from './Post.module.css'
import exp from "constants";

// let s = {
//     'item': 'Profile_item__TYOiq',
//     'content': 'Profile_content__LWBsZ '
// }
const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.ochkov.net/wiki/wiki/storage/app/uploads/public/5d7/a08/0c6/5d7a080c6de1b874225893.jpg'/>
            post1
            <div>
                <span>LIKE</span>
            </div>
        </div>
    )
}

export default Post