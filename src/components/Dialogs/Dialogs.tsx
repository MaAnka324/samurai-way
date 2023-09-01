import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/valodators";


export type DialogsPropsType = {
    addMessage: (message: string) => void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}

type MessageFormDataType = {
    message: string
}

const  maxLength50 =  maxLength(50)

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'}
                   component={Textarea}
                   validate={[required, maxLength50]}
                   placeholder='Enter your message'
            ></Field>
            <button>Send</button>
        </form>
    )
}


const MessageReduxForm = reduxForm<MessageFormDataType>({
    form: 'message'
})(AddMessageForm)


const Dialogs = (props: DialogsPropsType) => {
    const onSubmit = (formData: MessageFormDataType) => {
        props.addMessage(formData.message)
    }

    let dialogsElements = props.dialogs.map(dialog => <DialogItem
        key={dialog.id}
        name={dialog.name}
        id={dialog.id}
    />)

    let messagesElement = props.messages.map(message => <Message
        key={message.id}
        message={message.message}
    />)

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Dialogs