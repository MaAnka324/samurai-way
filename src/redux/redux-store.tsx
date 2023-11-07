import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionsTypes} from "./users-reducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {FormAction, reducer as formReducer} from 'redux-form'
import appReducer from "../../src/redux/app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware)))

export type ReduxStoreRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<ReduxStoreRootStateType> = useSelector

export type AppActionsType = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes | AuthActionsTypes | FormAction

export type AppDispatchType = ThunkDispatch<ReduxStoreRootStateType, unknown, AppActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStoreRootStateType, unknown, AppActionsType>

// export default store

// @ts-ignore
window.store = store