import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {authAPI, securityAPI, usersAPI} from "../api/api";
import {setUsers, toggleIsFetching} from "./users-reducer";
import {FormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";
import {getStatusTC, setUsersProfileTC} from "../../src/redux/profile-reducer";

type DataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
    // isLoggedIn: false
}

export type InitialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
    // isLoggedIn: boolean
}

const authReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'samurai-way/auth/SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }
        case 'GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export default authReducer

export type AuthActionsTypes = ReturnType<typeof setUserData>
    | ReturnType<typeof getCaptchaUrlAC>

export const setUserData = (id: string | null, email: string | null,
                            login: string | null, isAuth: boolean ) => ({
    type: "samurai-way/auth/SET-USER-DATA",
    data: {
        id,
        email,
        login,
        isAuth
    }
} as const)

// export const setIsLoggedInAC = (value: boolean) =>
//     ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const getCaptchaUrlAC = (captchaUrl: string) =>
    ({type: 'GET-CAPTCHA-URL-SUCCESS', captchaUrl} as const)


export const getUsersDataTC = (): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await authAPI.me()
            if (data.resultCode === 0) {
                let isAuth = true
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, isAuth))
                dispatch(setUsersProfileTC(id))
                dispatch(getStatusTC(id))
            }
        } catch (error) {
        }
    }
}

export const loginTC = (formData: FormDataType): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await authAPI.login(formData)
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(getUsersDataTC())
                //dispatch(setIsLoggedInAC(true))
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrlTC())
                }
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                let action = stopSubmit("login", {_error: message})
                dispatch(action)
                console.log(action.payload._error)
            }
        } catch (e) {

        }

    }
}

export const getCaptchaUrlTC = (): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await securityAPI.getCaptcha()
            console.log(data)
            const captchaUrl = data.url
            dispatch(getCaptchaUrlAC(captchaUrl))
        } catch (e) {

        }
    }
}

export const logoutTC = (): AppThunk => {
    return async (dispatch) => {
        const data = await authAPI.logout()
        try {
            if (data.resultCode === 0) {
                //dispatch(setIsLoggedInAC(false))
                dispatch(setUserData(null, null, null, false))
            }
        } catch (e) {

        }
    }
}
