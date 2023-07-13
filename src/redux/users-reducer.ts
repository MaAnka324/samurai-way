import {AllActionsTypes} from "./state";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export type UserType = {
    id: number
    protoURL: string
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    name: string
    status: string
    location: UserLocation
}

export type UserLocation = {
    city: string
    country: string
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 190,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const usersReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export default usersReducer


export type UsersActionsTypes = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const follow = (userId: number) => (
    {type: "FOLLOW", userId} as const
)
export const unfollow = (userId: number) => (
    {type: "UNFOLLOW", userId} as const
)
export const setUsers = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)
export const setCurrentPage = (currentPage: number) => (
    {type: "SET-CURRENT-PAGE", currentPage} as const
)
export const setUsersTotalCount = (totalCount: number) => (
    {type: "SET-TOTAL-COUNT", totalCount} as const
)
export const toggleIsFetching = (isFetching: boolean) => (
    {type: "TOGGLE-IS-FETCHING", isFetching} as const
)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => (
    {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const
)





export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                // dispatch(setTotalUsersCount(data.totalCount))  //покажет количество страниц
            })
    }
}

export const followTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.followUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}
export const unfollowTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))

        usersAPI.unFollowUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}