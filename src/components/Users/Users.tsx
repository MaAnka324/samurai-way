import React from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/UserIcon.png'
import {NavLink} from "react-router-dom";

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
                            <NavLink to={'/profile' + u.id}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollowed</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Followed</button>
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
