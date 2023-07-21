import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";


export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    post: Array<PostsType>
    messageForNewPost: string
    profile: null | ProfileType
}

export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}

type PhotosType = {
    'small': string
    'large': string
}

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

let initialState: ProfilePageType = {
    messageForNewPost: '',
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ] as Array<PostsType>,
    profile: null
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
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export default profileReducer


export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof setUsersProfile>


export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
}

export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const setUsersProfileTC = (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.setUsersProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}