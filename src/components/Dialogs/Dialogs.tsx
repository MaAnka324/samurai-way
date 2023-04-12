import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsArrayType, DialogsType, MessagesType} from "../../redux/state";



type DialogsPropsType = {
    addMessage: (val: string) => void
    dialogs: DialogsType[]
    messages: MessagesType[]
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map(message => <Message message={message.message}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addMessage = () => {
        if(newPostElement.current !== null){
            props.addMessage(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default Dialogs