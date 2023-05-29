import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/UserIcon.png'


class Users extends React.Component<any, any> {

    instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0'
    })

    constructor(props: any) {
        super(props);
        this.instance.get('/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users && this.props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollowed</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
    }
}

export default Users;