import React from 'react';
import s from './Nav.module.css';
import exp from "constants";
import {NavLink} from "react-router-dom";

// let s = {
//     'nav': 'Nav_nav__FfLBg',
//     'item': 'Nav_item__2Fnx8'
// }
const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav