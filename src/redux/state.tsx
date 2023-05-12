import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let onChange = () => {
    console.log("hello")
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}

type ProfileType = {
    id: number,
    message: string,
    likesCount: number
}

type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

type DialogsArrayType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type SidebarType = {}

type ProfilePageType = {
    messageForNewPost: string
    post: ProfileType[]

}

type AppPropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsArrayType
    sidebar: SidebarType
}

// export const addPost = () => {
//     let newPost: ProfileType = {
//         id: 5,
//         message: state.profilePage.messageForNewPost,
//         likesCount: 0
//     }
//     state.profilePage.post.push(newPost)
//     state.profilePage.changeNewTextCallback('')
//     onChange()
// }

// export const addMessage = (postMessage: string) => {
//     let newMessage: MessagesType = {
//         id: 5   ,
//         message: postMessage
//     }
//     state.dialogsPage.messages.push(newMessage)
//     onChange()
// }

// export const changeNewText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     onChange()
// }

// const state: AppPropsType = {
//     profilePage: {
//         messageForNewPost: '',
//         post: [
//             {id: 1, message: 'Hello', likesCount: 12},
//             {id: 2, message: 'How are you?', likesCount: 11},
//         ],
//         addPost,
//         changeNewTextCallback: changeNewText
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dobby'},
//             {id: 2, name: 'Alexey'},
//             {id: 3, name: 'Andrey'}
//         ],
//         messages: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'Hi'},
//             {id: 3, message: 'Yo'}
//         ],
//         addMessage
//     },
//     sidebar: {},
//
// }

type StoreType = {
    _state: AppPropsType
    // changeNewText: (newText: string) => void
    // addPost:  (message: string) => void,
    // addMessage: (postMessage: string) => void,
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => AppPropsType
    dispatch: (action: AllActionsTypes) => void
}

export type AllActionsTypes = ProfileActionsTypes | DialogsActionsTypes

export const store: StoreType = {
     _state: {
    profilePage: {
        messageForNewPost: '',
        post: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 11},
        ],
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
        newMessageText: ''
    },
    sidebar: {},

    },
    _onChange () {
        console.log("state changed")
    },
    subscribe (callback) {
        this._onChange = callback
    },
    getState() {
         return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange() //rerenderTree()
    }
}

export default store