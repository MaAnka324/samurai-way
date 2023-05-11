 import React, {ChangeEvent} from 'react';
 import MyPosts from "../MyPosts";
 import {addPostAC, changeNewTextAC, ProfileActionsTypes} from "../../../../redux/profile-reducer";
 import {newMessageTextAC, sendMessageAC} from "../../../../redux/dialogs-reducer";
 import Dialogs from "../../../Dialogs/Dialogs";
 import {ReduxStoreRootStateType} from "../../../../redux/redux-store";
 import {Dispatch} from "redux";
 import {connect} from "react-redux";

// type MyPostsContainerType = {
    // messageForNewPost: string
    // posts: ProfileType[]
    // dispatch: (action: ProfileActionsTypes) => void
    // store: StoreType
// }
// const MyPostsContainer = (props: any) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = props.store.getState().profilePage
//
//                     const addPost = () => {
//                         store.dispatch(addPostAC(state.messageForNewPost))
//                     }
//
//                     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(changeNewTextAC(e.currentTarget.value))}
//
//
//                     return (
//                         <MyPosts addPost={addPost}
//                                  onChange={onChange}
//                                  posts={state.post}
//                                  messageForNewPost={state.messageForNewPost}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }


 let mapStateToProps = (state: ReduxStoreRootStateType) => {
     return {
         posts: state.profilePage.post,
         messageForNewPost: state.profilePage.messageForNewPost
     }
 }

 let mapDispatchToProps = (dispatch: Dispatch) => {
     return {
         addPost: () => {
             dispatch(addPostAC())
         },
         onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
             dispatch(changeNewTextAC(e.currentTarget.value))
         }
     }
 }

 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



 export default MyPostsContainer