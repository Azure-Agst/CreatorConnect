import React from 'react';
import ReactDOM from 'react-dom';
import './CreatorConnect.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const string = "Welcome to CreatorConnect!"
ReactDOM.render(<App str = {string}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();