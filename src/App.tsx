import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ReduxStoreRootStateType} from "./redux/redux-store";
import {compose, Dispatch} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "../src/redux/app-reducer";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        {/*<Route path='/profile' render={() => <ProfileContainer/>}/>*/}
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


type MapDispatchPropsType = {
    initializeAppTC: () => void
}

type MapStatePropsType = {
    initialized: boolean
}

let mapStateToProps = (state: ReduxStoreRootStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

type AppPropsType = MapDispatchPropsType & MapStatePropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeAppTC}),
    withRouter
)(App)



// const App: React.FC<PropsType> = (props) => {
//
//     return (
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 <HeaderContainer/>
//                 <Nav/>
//                 <div className='app-wrapper-content'>
//                     <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
//                     <Route path='/dialogs' render={() => <DialogsContainer/>}/>
//                     <Route path='/users' render={() => <UsersContainer/>}/>
//                     <Route path='/news' render={() => <News/>}/>
//                     <Route path='/music' render={() => <Music/>}/>
//                     <Route path='/settings' render={() => <Settings/>}/>
//                     <Route path='/login' render={() => <Login/>}/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }



