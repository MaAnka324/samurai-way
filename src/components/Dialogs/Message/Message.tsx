import React from 'react';
import s from './../Dialogs.module.css'

type MessageType = {
    message: string
}

const Message = (props:MessageType) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}




export default Message