import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionsTypes,
    DialogsType,
    MessagesType,
    newMessageTextAC,
    sendMessageAC
} from "../../redux/state";



type DialogsPropsType = {
    addMessage: (val: string) => void
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map(message => <Message
        key={message.id}
        message={message.message}
    />)

    let newMessageDody = props.newMessageText

    const addMessage = () => {
        // props.addMessage(props.newMessageText)
        props.dispatch(sendMessageAC(props.newMessageText))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea value={newMessageDody}
                      onChange={(e) => {
                          props.dispatch(newMessageTextAC(e.currentTarget.value))}}
                      placeholder='Enter your message'
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default Dialogs