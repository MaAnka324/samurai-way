import {ReduxStoreRootStateType} from "../../src/redux/redux-store";
import {createSelector} from "reselect";


export const getUsers = (state: ReduxStoreRootStateType) => {
    return state.usersPage.users.filter(u => true)
}

export const getUsersSuperSelector =  createSelector(getUsers,(users) => {
    return users.filter(u => true)
})

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