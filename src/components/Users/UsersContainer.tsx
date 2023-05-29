import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import Users from "./UsersС";


type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer