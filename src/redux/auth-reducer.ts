import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";
import {setUsers, toggleIsFetching} from "./users-reducer";
import {FormDataType} from "../components/Login/Login";

type DataType = {
    id: string | null
    email: string | null
    login: string | null
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false
}

export type InitialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
}

const authReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "login/SET-IS-LOGGED-IN":
            return {
                ...state,
                isLoggedIn: action.value
            }
        default:
            return state
    }
}

export default authReducer


export type AuthActionsTypes = ReturnType<typeof setUserData> | ReturnType<typeof setIsLoggedInAC>

export const setUserData = (id: string | null, email: string | null, login: string | null) => ({
    type: "SET-USER-DATA",
    data: {
        id,
        email,
        login
    }
} as const)

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


export const setUsersDataTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}

export const loginTC = (data: FormDataType): AppThunk => {
    return (dispatch) => {
        authAPI.login(data)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true))
                }
            })
    }
}

export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(false))
                }
            })
    }
}
