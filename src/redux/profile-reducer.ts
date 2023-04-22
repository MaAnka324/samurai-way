import {ProfileType, StoreType} from "./state";

type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postMessage: postText
    } as const
}

const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

const profileReducer = (state: StoreType, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ProfileType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state._state.profilePage.post.push(newPost)
            state._onChange()
            return state
        case 'CHANGE-NEW-TEXT':
            state._state.profilePage.messageForNewPost = action.newText
            state._onChange()
            return state
        default:
            return state
    }
}

export default profileReducer