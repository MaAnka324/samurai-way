import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AppPropsType, store, subscribe} from "./redux/state";


export const renderTree = () => {
  return  ReactDOM.render(
        <App
            // profilePage={state.profilePage}
            // dialogsPage={state.dialogsPage}
            // sidebar={state}
            store={store}
        />,
        document.getElementById('root')
    );
}

store.subscribe(renderTree)


renderTree()


