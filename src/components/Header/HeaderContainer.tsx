import React from 'react';
import Header from "./Header";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUsersDataTC, logoutTC} from "../../redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component<ProfilePropsType> {
    render() {
        return <Header />
    }
}


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setUsersDataTC: () => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

// export default connect(mapStateToProps, {
//     // setUserData,
//     setUsersDataTC
// })(HeaderContainer)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {logoutTC})
)(HeaderContainer)






