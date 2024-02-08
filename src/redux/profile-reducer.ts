import {AllActionsTypes} from "./state";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../api/api";
import {FormProfileDataType} from "../../src/components/Profile/ProfileDataForm";
import {stopSubmit} from "redux-form";


export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    post: Array<PostsType>
    messageForNewPost: string
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts?: ContactsType | null | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}

type PhotosType = {
    'small': string
    'large': string
}

export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

let initialState: ProfilePageType = {
    messageForNewPost: '',
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ] as Array<PostsType>,
    profile: null,
    status: ''
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
            const newMessage = {id: 3, message: action.newPost, likesCount: 4}
            return {
                ...state,
                messageForNewPost: '',
                post: [newMessage, ...state.post]
            }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "DELETE-POST": {
            return {
                ...state,
                post: state.post.filter(p => p.id != action.id)
            }
        }
        case "ADD-PHOTO": {
            if (!state.profile) {
                return state; // or handle the case where profile is null
            }
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state
    }
}

export default profileReducer


export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccess>


export const addPostAC = (newPost: string) => ({type: "ADD-POST", newPost} as const)

export const savePhotoSuccess = (photos: PhotosType) => ({type: "ADD-PHOTO", photos} as const)


export const changeNewTextAC = (newText: string) => ({type: "CHANGE-NEW-TEXT", newText} as const)


export const setUsersProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: "DELETE-POST",
        id
    } as const
}


export const setUsersProfileTC = (userId: string): AppThunk => {
    return async (dispatch) => {
        const data = await profileAPI.setUsersProfile(userId)
        dispatch(setUsersProfile(data))
    }
}

export const getStatusTC = (userId: string): AppThunk => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    }
}

export const updateStatusTC = (status: string): AppThunk => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhotoTC = (file: File): AppThunk => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfileTC = (profile: FormProfileDataType): AppThunk => {
    return async (dispatch, getState) => {
        const id = getState().auth.id
        const data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0 && id !== null) {
            dispatch(setUsersProfileTC(id))
        }
        else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("edit-profile", {_error: message}))
        }
    }
}