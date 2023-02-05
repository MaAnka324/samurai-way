import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  );
}

export default App;
