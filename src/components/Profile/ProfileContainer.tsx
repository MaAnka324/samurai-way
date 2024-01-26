import React from 'react';
import {
    getStatusTC,
    PostsType,
    ProfileType, savePhotoTC,
    setUsersProfile,
    setUsersProfileTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        console.log(this.props)
        if (!userId) {
            userId = this.props.authorizedUserId as string
            //userId = '28555'

            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.setUsersProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusTC}
                         savePhoto={this.props.savePhotoTC}
                />
            </div>
        )
    }
}


let mapStateToPropsForRedirect = (state: ReduxStoreRootStateType): MapStatePropsForRedirectType => ({
    //isAuth: state.auth.isAuth
})

//AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

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
    isAuth: boolean
    status: string
    authorizedUserId: string | null
}

type MapStatePropsForRedirectType = {
    // isAuth: boolean
}

type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    setUsersProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: File) => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType // & MapStatePropsForRedirectType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    post: state.profilePage.post,
    messageForNewPost: state.profilePage.messageForNewPost,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

// let WithDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {
//     setUsersProfile,
//     setUsersProfileTC
// })(WithDataContainerComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersProfile,
        setUsersProfileTC,
        getStatusTC,
        updateStatusTC,
        savePhotoTC
    }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)