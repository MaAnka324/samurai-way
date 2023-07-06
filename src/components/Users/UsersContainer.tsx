import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow, UserType} from "../../redux/users-reducer";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


class UsersAPIComponent extends React.Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                // this.props.setTotalUsersCount(response.data.totalCount)  //покажет все количество страниц
            })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                toggleIsFetching={this.props.toggleIsFetching}
                isFetching={this.props.isFetching}
                // setTotalUsersCount={this.props.setTotalUsersCount}
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    // setTotalUsersCount: (totalCount: number) => void
}

export type UsersType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    // setTotalUsersCount
})(UsersAPIComponent)


export default UsersContainer