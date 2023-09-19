import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";

type AuthType = {
    isAuth: boolean
    login: string | null
    // setUserData: (
    //     id: string | null,
    //     email: string | null,
    //     login: string | null,
    // ) => void
}

const Header = (props: AuthType) => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    const logOutHandler = () => {
        dispatch(logoutTC())
    }


    return (
        <header className={s.header}>
            <img
                src='https://abrakadabra.fun/uploads/posts/2022-02/1644169601_3-abrakadabra-fun-p-avatarka-s-ulibkoi-4.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={logOutHandler}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
                <div>
                    {/*{isAuth && <button onClick={logOutHandler}>Log Out</button>}*/}
                </div>
            </div>

        </header>
    )
}

export default Header





