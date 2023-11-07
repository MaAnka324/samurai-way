import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ReduxStoreRootStateType, store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SamuraiJSApp from "../src/App";


export const renderTree = (state: ReduxStoreRootStateType) => {
    return ReactDOM.render(
        <SamuraiJSApp/>,
        document.getElementById('root')
    );
}

// store.subscribe(() => {
//     let state = store.getState()
//     renderTree(state)
// })

renderTree(store.getState())