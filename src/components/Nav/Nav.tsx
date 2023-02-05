import React from 'react';
import s from './Nav.module.css';
import exp from "constants";

// let s = {
//     'nav': 'Nav_nav__FfLBg',
//     'item': 'Nav_item__2Fnx8'
// }
const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav