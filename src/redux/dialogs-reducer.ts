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

const dialogsReducer = (state: DialogsArrayType, action: AllActionsTypes) => {

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