let renderTree = () => {
    console.log("hello")
}

export const subscribe = (callback: () => void) => {
    renderTree = callback
}

export type ProfileType = {
    id: number,
    message: string,
    likesCount: number
}

export type MyPostsType = {
    messageForNewPost: string
    post: ProfileType[]
    addPost: (message: string) => void
    changeNewTextCallback: (newText: string) => void
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

// export const addPost = () => {
//     let newPost: ProfileType = {
//         id: 5,
//         message: state.profilePage.messageForNewPost,
//         likesCount: 0
//     }
//     state.profilePage.post.push(newPost)
//     state.profilePage.changeNewTextCallback('')
//     renderTree()
// }

// export const addMessage = (postMessage: string) => {
//     let newMessage: MessagesType = {
//         id: 5   ,
//         message: postMessage
//     }
//     state.dialogsPage.messages.push(newMessage)
//     renderTree()
// }

// export const changeNewText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     renderTree()
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
    addMessage: (postMessage: string) => void
}

export const store: StoreType = {
     _state: {
    profilePage: {
        messageForNewPost: '',
        post: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 11},
        ],
        addPost,
        changeNewTextCallback: changeNewText
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

},
    changeNewText  (newText: string)  {
        this._state.profilePage.messageForNewPost = newText
        renderTree()
    },
    addPost  ()  {
        let newPost: ProfileType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.changeNewTextCallback('')
        renderTree()
    },
    addMessage  (postMessage: string)  {
        let newMessage: MessagesType = {
            id: 5,
            message: postMessage
        }
        this._state.dialogsPage.messages.push(newMessage)
        renderTree()
    }
}

export default store