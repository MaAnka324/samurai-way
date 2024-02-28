import React, {Suspense} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ReduxStoreRootStateType, store} from "./redux/redux-store";
import {compose} from "redux";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import WithSuspense from "../src/hoc/withSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


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
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Switch>
                        {/*<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>*/}
                        {/*<Route path='/profile' render={() => <ProfileContainer/>}/>*/}
                        <Route exact path='/' render={()=><Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        {/*<Route path='/music' render={() => <Music/>}/>*/}
                        {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>
            </div>
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
let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeAppTC}),
    withRouter
)(App)

let SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp


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



