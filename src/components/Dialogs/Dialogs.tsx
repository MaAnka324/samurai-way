import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number,
    name: string,
}

type MessageType = {
    message: string
}
const DialogItem = (props:DialogItemType) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageType) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}
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