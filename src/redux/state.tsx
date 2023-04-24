import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let onChange = () => {
    console.log("hello")
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}

export type ProfileType = {
    id: number,
    message: string,
    likesCount: number
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
    newMessageText: string
}

export type SidebarType = {}
export type ProfilePageType = {
    messageForNewPost: string
    post: ProfileType[]

}
export type AppPropsType = {
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

export type StoreType = {
    _state: AppPropsType
    changeNewText: (newText: string) => void
    addPost:  (message: string) => void,
    addMessage: (postMessage: string) => void,
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => AppPropsType
    dispatch: (action: AllActionsTypes) => void
}


export type AllActionsTypes = ProfileActionsTypes | DialogsActionsTypes
//
// export const addPostAC = (postText: string) => {
//     return {
//         type: "ADD-POST",
//         postMessage: postText
//     } as const
// }
//
// export const changeNewTextAC = (newText: string) => {
//     return {
//         type: "CHANGE-NEW-TEXT",
//         newText: newText
//     } as const
// }
//
// export const newMessageTextAC = (newMessage: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         newMessage: newMessage
//     } as const
// }
//
// export const sendMessageAC = (messageText: string) => {
//     return {
//         type: "SEND-MESSAGE",
//         messageText: messageText
//     } as const
// }

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
    changeNewText  (newText: string)  {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost()  {
        let newPost: ProfileType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.post.push(newPost)
        this._onChange()
    },
    addMessage  (postMessage: string)  {
        let newMessage: MessagesType = {
            id: 5,
            message: postMessage
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._onChange()
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

    }
}

export default store