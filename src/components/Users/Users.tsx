import React from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/UserIcon.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        // key={p.id} //??????????????????
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        onClick={(e) => {
                            props.setCurrentPage(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users && props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': 'b2aa0181-7c4a-4cfb-9fa0-ad8f16fa6d5f'
                                    //     }
                                    // })
                                    usersAPI.unFollowUsers(u.id)
                                        .then(data => {
                                            if(data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }

                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    usersAPI.followUsers(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })

                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            {/*<div>{"u.location.city"}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    );

};
