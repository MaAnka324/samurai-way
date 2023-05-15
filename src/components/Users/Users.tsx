import React from 'react';
import {UsersType} from "./UsersContainer";

export const Users = (props: UsersType) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                protoURL: '',
                followed: true,
                fullName: 'Alexey',
                status: 'Hello',
                location:
                    {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
            },
            {
                id: 2,
                protoURL: '',
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
                id: 1,
                protoURL: '',
                followed: true,
                fullName: 'Andrew',
                status: 'LaLaLa',
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
                            <img src={u.protoURL}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollowed</button>
                                : <button onClick={() => {props.follow(u.id)}}>Followed</button>
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