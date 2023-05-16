import React from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'

export const Users = (props: UsersType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                protoURL: 'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-m.jpg',
                followed: true,
                fullName: 'SpongeBob',
                status: 'LaLaLa',
                location:
                    {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
            },
            {
                id: 2,
                protoURL: 'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-m.jpg',
                followed: true,
                fullName: 'Angelina',
                status: 'Hi',
                location:
                    {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
            },
            {
                id: 3,
                protoURL: 'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-m.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'Hello, I am Andrew',
                location:
                    {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
            },
        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.protoURL} className={styles.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;