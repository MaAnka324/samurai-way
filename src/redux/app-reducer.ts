import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";
import {setUsers, toggleIsFetching} from "./users-reducer";
import {FormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";
import {getUsersDataTC} from "../../src/redux/auth-reducer";


let initialState: InitialStateType = {
    initialized: false
}

export type InitialStateType = {
    initialized: boolean
}

const appReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer
export const initializedSuccess = () => ({
    type: "SET-INITIALIZED",

} as const)


export const initializeAppTC = (): AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getUsersDataTC())
        debugger
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })

    }
}


