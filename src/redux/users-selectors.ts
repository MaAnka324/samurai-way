import {ReduxStoreRootStateType} from "../../src/redux/redux-store";


export const getUsers = (state: ReduxStoreRootStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: ReduxStoreRootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: ReduxStoreRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: ReduxStoreRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: ReduxStoreRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: ReduxStoreRootStateType) => {
    return state.usersPage.followingInProgress
}

export const getIsAuth = (state: ReduxStoreRootStateType) => {
    return state.auth.isAuth
}