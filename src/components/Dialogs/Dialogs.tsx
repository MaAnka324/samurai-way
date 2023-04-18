import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, addPostAC, DialogsArrayType, DialogsType, MessagesType, sendMessageAC} from "../../redux/state";
import Post from "../Profile/MyPosts/Post/Post";



type DialogsPropsType = {
    addMessage: (val: string) => void
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map(message => <Message message={message.message}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let newMessageDody = props.newMessageText

    // let addMessage = () => {
    //     if(newPostElement.current !== null){
    //         props.addMessage(newPostElement.current.value)
    //         newPostElement.current.value = ''
    //         props.dispatch(sendMessageAC(props.newMessageText))
    //     }
    // }

    const addMessage = () => {
        props.addMessage(props.newMessageText)
        props.dispatch(addPostAC(props.newMessageText))
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
                      // ref={newPostElement}
                      placeholder='Enter your message'
                      onChange={(e) => {
                          props.addMessage(e.currentTarget.value)}}
            ></textarea>
            <button onClick={addMessage}>Send</button>

        </div>
    )
}

export default Dialogs