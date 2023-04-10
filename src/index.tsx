import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AppPropsType, store} from "./redux/state";


export const renderTree = (state:AppPropsType) => {
    ReactDOM.render(
        <App
            // profilePage={state.profilePage}
            // dialogsPage={state.dialogsPage}
            // sidebar={state}
            store={store}
        />,
        document.getElementById('root')
    );
}



