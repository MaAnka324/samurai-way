import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {getUsersDataTC, setUserData} from "../../src/redux/auth-reducer";


let initialState: InitialStateType = {
    initialized: false
}

export type InitialStateType = {
    initialized: boolean
}

const appReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET-INITIALIZED':
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
export type AppActionsTypes = ReturnType<typeof initializedSuccess>


export const initializeAppTC = (): AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getUsersDataTC())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })

    }
}


