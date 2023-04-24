import {AllActionsTypes, ProfilePageType, ProfileType, StoreType} from "./state";

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


const profileReducer = (state: ProfilePageType, action: AllActionsTypes) => {

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