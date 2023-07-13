import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionsTypes} from "./users-reducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type ReduxStoreRootStateType = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<ReduxStoreRootStateType> = useSelector

export type AppActionsType = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes | AuthActionsTypes

export type AppDispatchType = ThunkDispatch<ReduxStoreRootStateType, any, AppActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStoreRootStateType, unknown, AppActionsType>

// export default store

// @ts-ignore
window.store = store