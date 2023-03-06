import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import dialogs from "./components/Dialogs/Dialogs";

import Dialogs from "./components/Dialogs/Dialogs";
import {AppPropsType} from "./redux/state";




function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile post={props.profilePage.post}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
