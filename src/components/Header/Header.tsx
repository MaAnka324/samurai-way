import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";
import {Button} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const login = useAppSelector(state => state.auth.login);
    const profile = useAppSelector(state => state.profilePage.profile);


    const logOutHandler = () => {
        dispatch(logoutTC());
    }

    return (
        <header className={s.header}>
            {/*<img*/}
            {/*    src='https://abrakadabra.fun/uploads/posts/2022-02/1644169601_3-abrakadabra-fun-p-avatarka-s-ulibkoi-4.jpg'/>*/}
            {/*<img alt={'User Photo'} src={profile?.photos.small}/>*/}
            <div className={s.loginBlock}>
                {isAuth
                    // ? <div>{login} - <button onClick={logOutHandler}>Log Out</button></div>
                    ? <div className={s.loginName}><img alt={'User Photo'} src={profile?.photos.small}/> {login}   <Button variant="outlined" startIcon={<LogoutIcon />}
                                             onClick={logOutHandler}>
                        Log Out
                    </Button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header





