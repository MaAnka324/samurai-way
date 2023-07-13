import React from 'react';
import Header from "./Header";
import {ReduxStoreRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUsersDataTC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {

        this.props.setUsersDataTC()

    }

    render() {
        return <Header {...this.props}/>
    }
}


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    // setUserData: (
    //     id: string | null,
    //     email: string | null,
    //     login: string | null,
    // ) => void
    setUsersDataTC: () => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    // setUserData,
    setUsersDataTC
})(HeaderContainer)






