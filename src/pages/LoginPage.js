import React, {Component} from 'react';

import '../assets/styles/LoginPage.less';

import Img from "../components/Img";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";


export default class LoginPage extends Component {

    render() {
        return (
            <div className="login-page">
                {/* 1. Logo图片*/}
                {/*<img src={require("../assets/images/logo.png")} alt="" />*/}
                <Img src="logo.png"/>

                {/* 2. form表单*/}
                <form className="login-form">
                    {/* 1. 用户名*/}
                    <FormInput type="text" iconClass="shouji" placeholder="用户名" />

                    {/* 2. 密码框*/}
                    <FormInput type="password" iconClass="mima" placeholder="密码"/>

                    {/*登录按钮*/}
                    <FormBtn isFull={true}>登录</FormBtn>


                    {/*忘记密码*/}
                    <FormBtn type="ordinary">忘记密码</FormBtn>


                    {/*免费登录*/}
                    <FormBtn>免费登录</FormBtn> &emsp;
                    {/*游客登录*/}
                    <FormBtn>游客登录</FormBtn>
                </form>


            </div>
        );
    }
}