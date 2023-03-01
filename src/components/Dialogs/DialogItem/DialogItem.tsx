import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number,
    name: string,
}

const DialogItem = (props:DialogItemType) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem