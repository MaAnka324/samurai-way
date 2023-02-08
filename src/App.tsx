import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>
            <Dialogs/>
        </div>
        {/*<Profile/>*/}
    </div>
  );
}

export default App;
