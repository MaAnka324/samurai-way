import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsArrayType} from "../../index";


// type DialogsType = {
//     id: number,
//     name: string
// }
//
// type MessagesType = {
//     id: number,
//     message: string
// }
//
// export type DialogsArrayType = {
//     dialogs: DialogsType[]
//     messages: MessagesType[]
// }

const Dialogs = (props: DialogsArrayType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {}
            </div>
        </div>
    )
}

export default Dialogs