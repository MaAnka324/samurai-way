import {AllActionsTypes, FindUsersType} from "./state";

export type UserType = {
    id: number
    protoURL: string
    "photos": {
        "small": string,
        "large": string
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
    totalUsersCount: 90,
    currentPage: 1,
    isFetching: true
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const usersReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return  u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return  u
                })
            }
        case "SET-USERS": {
            return {
                ...state,
                users: action.users
            }
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
        default:
            return state
    }
}

export default usersReducer


export type UsersActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: number) => (
    {type: "FOLLOW", userId} as const
)
export const unfollowAC = (userId: number) => (
    {type: "UNFOLLOW", userId} as const
)
export const setUsersAC = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)
export const setCurrentPageAC = (currentPage: number) => (
    {type: "SET-CURRENT-PAGE", currentPage} as const
)
export const setUsersTotalCountAC = (totalCount: number) => (
    {type: "SET-TOTAL-COUNT", totalCount} as const
)
export const toggleIsFetchingAC = (isFetching: boolean) => (
    {type: "TOGGLE-IS-FETCHING", isFetching} as const
)