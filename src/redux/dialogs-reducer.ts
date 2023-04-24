import {AllActionsTypes, DialogsArrayType, StoreType} from "./state";

export type DialogsActionsTypes = ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof sendMessageAC>

export const newMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessage: newMessage
    } as const
}

export const sendMessageAC = (messageText: string) => {
    return {
        type: "SEND-MESSAGE",
        messageText: messageText
    } as const
}

let initialState = {
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
}

const dialogsReducer = (state: DialogsArrayType = initialState, action: AllActionsTypes) => {

    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageText = action.newMessage
    }
    else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageText
        state.newMessageText = ''
        state.messages.push({id: 7, message: body})
    }

    return state
}

export default dialogsReducer