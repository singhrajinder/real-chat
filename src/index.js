import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import store from './store';
import { Provider } from 'react-redux';



const firebaseConfig = {
  apiKey: "AIzaSyBCbaHbvFTyDd8vSryN8N5eY8jv88MAseA",
  authDomain: "real-chat-d042a.firebaseapp.com",
  projectId: "real-chat-d042a",
  storageBucket: "real-chat-d042a.appspot.com",
  messagingSenderId: "749216138264",
  appId: "1:749216138264:web:3a6104d37008803d006f6d"
};

const app = firebase.initializeApp(firebaseConfig);

console.log(app, "this is Firebase");

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
