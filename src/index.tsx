import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AppPropsType, StoreType, subscribe} from "./redux/state";
import store, {ReduxStoreRootStateType} from "./redux/redux-store";


export const renderTree = (state: ReduxStoreRootStateType) => {
  return  ReactDOM.render(
        <App
            state={state}
            dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

renderTree(store.getState())