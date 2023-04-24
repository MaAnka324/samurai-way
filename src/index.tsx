import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AppPropsType, subscribe} from "./redux/state";
import store from "./redux/redux-store";


export const renderTree = (state: any) => {
  return  ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

renderTree(store.getState())


