import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


export type DialogsPropsType = {
    addMessage: () => void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map(message => <Message
        key={message.id}
        message={message.message}
    />)

    let newMessageDody = props.newMessageText

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea value={newMessageDody}
                      onChange={props.onChange}
                      placeholder='Enter your message'
            ></textarea>
            <button onClick={props.addMessage}>Send</button>
        </div>
    )
}

export default Dialogs