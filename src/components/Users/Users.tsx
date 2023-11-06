import React, {FC} from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/UserIcon.png'
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";


export const Users: FC<UsersType> = (
    {
        users,
        pageSize,
        totalUsersCount,
        followingInProgress,
        followTC,
        unfollowTC,
        ...props
    }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator
                users={users}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={props.currentPage}
                isFetching={props.isFetching}
                followingInProgress={followingInProgress}
                isAuth={props.isAuth}
                followTC={followTC}
                unfollowTC={unfollowTC}
                getUsersTC={props.getUsersTC}
                setCurrentPage={props.setCurrentPage}
            />
            {
                users && users.map((u: any) => <div key={u.id}>
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
                                ? <button
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        unfollowTC(u.id)

                                    }}>Unfollow</button>

                                : <button
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        followTC(u.id)

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
