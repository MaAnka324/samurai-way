import React from 'react';
import {sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

// type DialogsPropsType = {
    // dialogs: DialogsType[]
    // messages: MessagesType[]
    // dispatch: (action: DialogsActionsTypes) => void
    // newMessageText: string
//     store: StoreType
// }
// const DialogsContainer = (props: any) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState().dialogsPage
//
//                     const addMessage = () => {
//                         store.dispatch(sendMessageAC(state.newMessageText))
//                     }
//
//                     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(newMessageTextAC(e.currentTarget.value))
//                     }
//
//                     return (
//                         <Dialogs
//                             addMessage={addMessage}
//                             onChange={onChange}
//                             dialogs={state.dialogs}
//                             messages={state.messages}
//                             newMessageText={state.newMessageText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }




// let AuthRedirectComponent = (props: DialogsPropsType) => {
//     if(!props.isAuth) return <Redirect to={'/login'}/>
//     return <Dialogs {...props}/>
// }

let mapStateToProps = (state: ReduxStoreRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        // newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        },
        // onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     dispatch(newMessageTextAC(e.currentTarget.value))
        // }
    }
}

// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)




export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)



// export default DialogsContainer