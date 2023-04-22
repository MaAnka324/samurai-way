import {StoreType} from "./state";

type ActionsTypes = ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof sendMessageAC>

const newMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessage: newMessage
    } as const
}

const sendMessageAC = (messageText: string) => {
    return {
        type: "SEND-MESSAGE",
        messageText: messageText
    } as const
}

const dialogsReducer = (state: StoreType, action: ActionsTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state._state.dialogsPage.newMessageText = action.newMessage
            state._onChange()
            return state
        case "SEND-MESSAGE":
            let body = state._state.dialogsPage.newMessageText
            state._state.dialogsPage.newMessageText = ''
            state._state.dialogsPage.messages.push({id: 7, message: body})
            state._onChange()
            return state
        default:
            return state
    }
}

export default dialogsReducer