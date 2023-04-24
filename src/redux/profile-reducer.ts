import {AllActionsTypes, ProfilePageType, ProfileType} from "./state";

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postMessage: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

let initialState = {
    messageForNewPost: '',
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ]
}

const profileReducer = (state: ProfilePageType = initialState, action: AllActionsTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: ProfileType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.post.push(newPost)
            return state
        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer