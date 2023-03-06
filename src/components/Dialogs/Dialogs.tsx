import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsArrayType} from "../../redux/state";




const Dialogs = (props: DialogsArrayType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs