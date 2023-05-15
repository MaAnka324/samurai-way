import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ReduxStoreRootStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

type PropsType = {
    state: ReduxStoreRootStateType
    dispatch: Dispatch
}

const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <Users/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
