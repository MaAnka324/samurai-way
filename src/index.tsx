import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {ReduxStoreRootStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export const renderTree = (state: ReduxStoreRootStateType) => {
  return  ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
        <App
            state={state}
            dispatch = {store.dispatch.bind(store)}
        />
          </Provider>
      </BrowserRouter>,
        document.getElementById('root')
    );
}

// store.subscribe(() => {
//     let state = store.getState()
//     renderTree(state)
// })

renderTree(store.getState())