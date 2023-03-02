import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type ProfileType = {
    id: number,
    message: string,
    likesCount: number
}

export type MyPostsType = {
    post: ProfileType[]
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type DialogsArrayType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type AppPropsType = {
    profilePage: MyPostsType,
    dialogsPage: DialogsArrayType,
}


let state: AppPropsType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 11},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Masha'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Andrey'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yo'}
        ]
    }
}



ReactDOM.render(
    <App post={state.profilePage}
         dialogs={state.dialogsPage.dialogs}
         messages={state.dialogsPage.messages}
    />,
  document.getElementById('root')
);

export default state