import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/UserIcon.png'


class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            // this.props.setTotalUsersCount(response.data.totalCount)  //покажет все количество страниц
        })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            key={this.props.id}
                            className={this.props.currentPage === p ? styles.selectedPage : ''}
                            onClick={(e) => {this.onPageChanged(p)}}
                        >{p}</span>
                    })}
                </div>
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
                            {/*<div>{"u.location.city"}</div>*/}
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;