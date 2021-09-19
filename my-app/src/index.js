import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
    }

);
