import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type AuthType = {
    isAuth: boolean
    login: string | null
    setUserData: (
        id: string | null,
        email: string | null,
        login: string | null,
    ) => void
}

const Header = (props: AuthType) => {
    console.log(props)
    return (
        <header className={s.header}>
            <img
                src='https://abrakadabra.fun/uploads/posts/2022-02/1644169601_3-abrakadabra-fun-p-avatarka-s-ulibkoi-4.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header





