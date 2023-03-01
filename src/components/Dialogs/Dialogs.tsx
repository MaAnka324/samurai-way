import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Andrey'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = messages.map(message => <Message message={message.message}/>)

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