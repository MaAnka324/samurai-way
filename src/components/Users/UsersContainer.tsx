import React from 'react';
import {connect} from "react-redux";
import {
    follow, followTC,
    getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unfollowTC,
    UserType
} from "../../redux/users-reducer";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class UsersAPIComponent extends React.Component<UsersType> {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        // //     withCredentials: true
        // // })
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         // this.props.setTotalUsersCount(data.totalCount)  //покажет количество страниц
        //     })
    }

    onPageChanged = (pageNumber: any) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        // //     withCredentials: true
        // // })
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.onPageChanged}
                users={this.props.users}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                // setUsers={this.props.setUsers}
                // toggleIsFetching={this.props.toggleIsFetching}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                // setTotalUsersCount={this.props.setTotalUsersCount}
                getUsersTC={this.props.getUsersTC}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}
                isAuth={this.props.isAuth}
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
    followingInProgress: Array<number>
    isAuth: boolean
}

type MapDispatchPropsType = {
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
}

export type UsersType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

// let withRedirect = WithAuthRedirect(UsersAPIComponent)
//
// const UsersContainer = connect(mapStateToProps, {
//     setCurrentPage,
//     getUsersTC,
//     unfollowTC,
//     followTC
// })(withRedirect)
//
//
// export default UsersContainer


// let withRedirect = WithAuthRedirect(UsersAPIComponent)
//
// const UsersContainer = connect(mapStateToProps, {
//     setCurrentPage,
//     getUsersTC,
//     unfollowTC,
//     followTC
// })(withRedirect)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setCurrentPage, getUsersTC, unfollowTC, followTC}),
        WithAuthRedirect,
        withRouter
    )(UsersAPIComponent)


// export default UsersContainer










