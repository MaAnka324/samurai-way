import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {AppPropsType, store, subscribe} from "./redux/state";


export const renderTree = () => {
  return  ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    );
}

store.subscribe(renderTree)

renderTree()


