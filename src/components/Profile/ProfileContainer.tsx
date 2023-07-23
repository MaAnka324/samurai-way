import React from 'react';
import {PostsType, ProfileType, setUsersProfile, setUsersProfileTC} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";


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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state: ReduxStoreRootStateType): MapStatePropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent) //////////////////////////////

// let AuthRedirectComponent = (props: PropsType) => {
//     if(!props.isAuth) return <Redirect to={'/login'}/>
//     return <ProfileContainer {...props}/>
// }

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    post: Array<PostsType>
    messageForNewPost: string
    profile: null | ProfileType
}

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    setUsersProfileTC: (userId: string) => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & MapStatePropsForRedirectType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    post: state.profilePage.post,
    messageForNewPost: state.profilePage.messageForNewPost,
})

let WithDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    setUsersProfile,
    setUsersProfileTC
})(WithDataContainerComponent)