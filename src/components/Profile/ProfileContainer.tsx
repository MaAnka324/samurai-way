import React from 'react';
import {PostsType, ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";


class ProfileContainer extends React.Component<any, ProfileType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                {/*<Profile {...this.props} profile={this.props}/>*/}
            </div>
        )
    }
}


type MapStatePropsType = {
    post: Array<PostsType>
    messageForNewPost: string
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    addPostAC: () => void
    changeNewTextAC: (newText: string) => void
    setUsersProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    post: state.profilePage.post,
    messageForNewPost: state.profilePage.messageForNewPost
})

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)