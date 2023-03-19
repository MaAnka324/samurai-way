import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, AppPropsType} from "./redux/state";


export const renderTree = (state:AppPropsType) => {
    ReactDOM.render(
        <App
            profilePage={state.profilePage}
            dialogsPage={state.dialogsPage}
            sidebar={state}

        />,
        document.getElementById('root')
    );
}

renderTree(state)

