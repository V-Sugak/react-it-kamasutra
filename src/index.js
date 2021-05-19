import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, massege: "Hi, how are you?", likeCount: 15 },
  { id: 1, massege: "It's my first post.", likeCount: 20 }
]

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Victor" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Tanya" }
]

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your it-kamasutra?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" }
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
