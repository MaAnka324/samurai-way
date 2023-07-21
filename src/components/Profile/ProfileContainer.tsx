import React from 'react';
import {PostsType, ProfileType, setUsersProfile, setUsersProfileTC} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }

        this.props.setUsersProfileTC(userId)

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                />
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
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    setUsersProfileTC: (userId: string) => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    post: state.profilePage.post,
    messageForNewPost: state.profilePage.messageForNewPost,
    isAuth: state.auth.isAuth
})

let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile,
    setUsersProfileTC
})(WithDataContainerComponent)