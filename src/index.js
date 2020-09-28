import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// 引入核心文件
import App from './pages/App';
// import * as serviceWorker from './serviceWorker';


// 引入初始化样式
import "normalize.css";

// 引入全局样式等
import "./assets/styles/core.less";




ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
