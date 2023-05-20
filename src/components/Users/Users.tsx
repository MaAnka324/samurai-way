import React, {useEffect} from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/UserIcon.png'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // withCredentials: true,
    // headers:{
    //     'API-KEY':'7d3c398b-2b30-4da2-a118-f5a83f07d318'
    // }
})
export const Users = (props: UsersType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            instance.get('/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users && props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
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
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;