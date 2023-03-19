import {renderTree} from "../index";


export type ProfileType = {
    id: number,
    message: string,
    likesCount: number
}

export type MyPostsType = {
    post: ProfileType[]
    addPost: (message: string) => void
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
    addMessage: (message: string) => void
}

export type SidebarType = {}

export type AppPropsType = {
    profilePage: MyPostsType
    dialogsPage: DialogsArrayType
    sidebar: SidebarType

}


export const addPost = (postMessage: string) => {
    let newPost: ProfileType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.post.push(newPost)

    renderTree(state)
}


export const addMessage = (postMessage: string) => {
    let newMessage: MessagesType = {
        id: 5   ,
        message: postMessage
    }
    state.dialogsPage.messages.push(newMessage)

    renderTree(state)
}


const state: AppPropsType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 11},
        ],
        addPost
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dobby'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Andrey'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yo'}
        ],
        addMessage
    },
    sidebar: {},

}



export default state