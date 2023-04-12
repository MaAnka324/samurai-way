import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {store, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    // let message = state.profilePage.post[0].message
    // let message2 = state.profilePage.post[1].message

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        messageForNewPost={state.profilePage.messageForNewPost}
                        posts={state.profilePage.post}
                        addPost={props.store.addPost.bind(props.store)}
                        changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                    />}

                    />
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.store._state.dialogsPage.dialogs}
                        messages={props.store._state.dialogsPage.messages}
                        addMessage={props.store.addMessage}
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
