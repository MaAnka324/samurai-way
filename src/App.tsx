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

type PropsType = {
    state: ReduxStoreRootStateType
    dispatch: Dispatch
}

const App: React.FC<PropsType> = (props) => {

    const state = props.state

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        // messageForNewPost={state.profilePage.messageForNewPost}
                        // posts={state.profilePage.post}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        // newMessageText={state.dialogsPage.newMessageText}
                        // dialogs={props.state.dialogsPage.dialogs}
                        // messages={props.state.dialogsPage.messages}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
