import React from 'react';
import './App.css';

import Technologies from "./components/Technologies";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Technologies/>
     Hello, samurai! Let's go!
    </div>
  );
}

export default App;
