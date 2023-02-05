import React from 'react';
import './Nav.module.css';
import exp from "constants";

let s = {
    'nav': 'Nav_nav__jai+c',
    'item': 'Nav_item__r9ghb'
}
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