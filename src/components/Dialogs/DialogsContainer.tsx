import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import state, {
    AllActionsTypes} from "../../redux/state";
import {DialogsActionsTypes, newMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type DialogsPropsType = {
    // dialogs: DialogsType[]
    // messages: MessagesType[]
    // dispatch: (action: DialogsActionsTypes) => void
    // newMessageText: string
//     store: StoreType
// }
// const DialogsContainer = (props: any) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState().dialogsPage
//
//                     const addMessage = () => {
//                         store.dispatch(sendMessageAC(state.newMessageText))
//                     }
//
//                     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(newMessageTextAC(e.currentTarget.value))
//                     }
//
//                     return (
//                         <Dialogs
//                             addMessage={addMessage}
//                             onChange={onChange}
//                             dialogs={state.dialogs}
//                             messages={state.messages}
//                             newMessageText={state.newMessageText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: ReduxStoreRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageAC())
        },
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newMessageTextAC(e.currentTarget.value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer