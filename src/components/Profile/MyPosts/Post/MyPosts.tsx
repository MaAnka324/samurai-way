import React from 'react';
import s from './MyPosts.module.css'
import exp from "constants";

// let s = {
//     'item': 'Profile_item__TYOiq',
//     'content': 'Profile_content__LWBsZ '
// }
const MyPosts = () => {
    return (<div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
         </div>
    )
}

export default MyPosts