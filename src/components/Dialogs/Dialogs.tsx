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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Masha' id={1}/>
                <DialogItem name='Alexey' id={2}/>
                <DialogItem name='Andrey' id={3}/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Hi'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs