import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from "./Test";
import NewTest from "./NewTest"
import Todo from './Todo';
import Try from './Try';

import CheckBox from'./CheckBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App></App>
  // <React.StrictMode>
    // <Test/>
    // <NewTest></NewTest>
    // <CheckBox></CheckBox>
    <Todo></Todo>
    // <Try></Try>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
