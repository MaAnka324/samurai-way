import {AllActionsTypes, ProfilePageType} from "./state";

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export type ProfileType = {
    id: number,
    message: string,
    likesCount: number
}

let initialState = {
    messageForNewPost: '',
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ] as Array<ProfileType>
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                messageForNewPost: action.newText
            }
        case 'ADD-POST':
            const newMessage = {id: 3, message: state.messageForNewPost, likesCount: 4}
            return {
                ...state,
                messageForNewPost: '',
                post: [...state.post, newMessage]
            }
        default:
            return state
    }
}

export default profileReducer