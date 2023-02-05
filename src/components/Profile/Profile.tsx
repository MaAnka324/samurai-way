import React from 'react';
import s from './Profile.module.css'
import exp from "constants";
import MyPosts from "./MyPosts/Post/MyPosts";

// let s = {
//     'item': 'Profile_item__TYOiq',
//     'content': 'Profile_content__LWBsZ '
// }
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/ddzhn9j-59f0da47-6ed4-4e34-b732-aec2d19513d0.png/v1/fill/w_598,h_350,q_70,strp/harry_potter_and_the_chamber_of_secrets_fanart_07_by_vladislavpantic_ddzhn9j-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kZHpobjlqLTU5ZjBkYTQ3LTZlZDQtNGUzNC1iNzMyLWFlYzJkMTk1MTNkMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Y9jlhivjYT4XS4LVTbDlVe2ipynHrHPquQ1WsaRE_8s'/>
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile