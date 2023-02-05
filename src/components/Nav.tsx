import React from 'react';
import classes from './Nav.module.css'
import exp from "constants";


// let classes {
//     'nav': '',
//     'item': ''
// }
const Nav = () => {
    return (
        <nav className='nav'>
            <div className='item'>
                <a>Profile</a>
            </div>
            <div className='item'>
                <a>Messages</a>
            </div>
            <div className='item'>
                <a>News</a>
            </div>
            <div className='item'>
                <a>Music</a>
            </div>
            <div className='item'>
                <a>Settings</a>
            </div>

        </nav>
    )
}

export default Nav