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
}

export type SidebarType = {}
type ProfilePageType = {
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
    dispatch: (action: ActionsTypes) => void
}

 type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
 type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

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
        // this.changeNewText('')
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
         if(action.type === 'ADD-POST') {
             let newPost: ProfileType = {
                 id: 5,
                 message: action.postMessage,
                 likesCount: 0
             }
             this._state.profilePage.post.push(newPost)
             // this.changeNewText('')
             this._onChange()
         }
         else if (action.type === 'CHANGE-NEW-TEXT'){
             this._state.profilePage.messageForNewPost = action.newText
             this._onChange()
         }
    }
}

export default store