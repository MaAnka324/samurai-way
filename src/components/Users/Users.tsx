import React, {FC} from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/UserIcon.png'
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";
import {Button} from "@mui/material";


export const Users: FC<UsersType> = (
    {
        users,
        pageSize,
        totalItemsCount,
        followingInProgress,
        followTC,
        unfollowTC,
        ...props
    }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    console.log(totalItemsCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div >
            <Paginator
                pageSize={pageSize}
                totalItemsCount={totalItemsCount}
                currentPage={props.currentPage}
                portionSize={10}
                setCurrentPage={props.setCurrentPage}
            />
            <div className={styles.usersBlock}>
                {
                    users && users.map((u: any) => <div className={styles.user} key={u.id}>
                    <span className={styles.user}>

                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <Button variant="outlined"
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        unfollowTC(u.id)

                                    }}>Unfollow</Button>

                                : <Button variant="outlined"
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        followTC(u.id)

                                    }}>Follow</Button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <b>{u.name}</b>
                            <div>{u.status}</div>
                        </span>
                        {/*<span>*/}
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{"u.location.city"}</div>*/}
                        {/*</span>*/}
                    </span>
                    </div>)
                }
            </div>
        </div>
    );

};
