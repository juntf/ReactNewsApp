import React, {Component} from 'react';

import LoginPage from "./LoginPage";
// 页面展示哪个组件 是由App控制的
export default class App extends Component {

    render() {
        return (

            <LoginPage />
        );
    }
}