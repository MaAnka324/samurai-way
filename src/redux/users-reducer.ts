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
    users: []
}

export type InitialStateType = {
    users: Array<UserType>
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
        default:
            return state
    }
}

export default usersReducer


export type UsersActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => (
    {type: "FOLLOW", userId} as const
)
export const unfollowAC = (userId: number) => (
    {type: "UNFOLLOW", userId} as const
)
export const setUsersAC = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)