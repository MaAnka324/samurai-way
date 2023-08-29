import {AllActionsTypes} from "./state";

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>

// export const newMessageTextAC = (newMessage: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         newMessage: newMessage
//     } as const
// }

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
    } as const
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dobby'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Andrey'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]  as Array<MessagesType>,
    // newMessageText: ''
}

export type InitialStateType = typeof initialState


const dialogsReducer = (state: InitialStateType = initialState, action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        // case "UPDATE-NEW-MESSAGE-BODY":
        //     return {
        //         ...state,
        //         newMessageText: action.newMessage
        //     }
        case "SEND-MESSAGE": {
            const newMessage = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newMessage}]
            }
        }
        default:
            return state
    }
}

export default dialogsReducer