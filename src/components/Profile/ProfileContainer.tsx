import React from 'react';
import {PostsType, ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    post: Array<PostsType>
    messageForNewPost: string
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    // addPostAC: () => void
    // changeNewTextAC: (newText: string) => void
    setUsersProfile: (profile: ProfileType) => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    post: state.profilePage.post,
    messageForNewPost: state.profilePage.messageForNewPost
})

let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithDataContainerComponent)