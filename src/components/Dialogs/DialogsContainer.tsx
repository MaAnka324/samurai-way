import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    AllActionsTypes,
    DialogsType,
    MessagesType,

} from "../../redux/state";
import {DialogsActionsTypes, newMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: DialogsActionsTypes) => void
    newMessageText: string
}
const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        // props.addMessage(props.newMessageText)
        props.dispatch(sendMessageAC(props.newMessageText))
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextAC(e.currentTarget.value))}

    return (
        <Dialogs
            addMessage={addMessage}
            onChange={onChange}
            dialogs={props.dialogs}
            messages={props.messages}
            newMessageText={props.newMessageText}
        />
    )
}

export default DialogsContainer