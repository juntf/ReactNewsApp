import React, {Component} from 'react';

import "../assets/styles/formInput.less";

// 图标样式文件
import "../assets/font/iconfont.css";


class FormInput extends Component {
    render() {
        return (
            <div className="input-group">
                {/*图标字体*/}
                <i className={"iconfont icon-" + this.props.iconClass}></i>


                {/*输入框*/}
                <input type={this.props.type}  placeholder={this.props.placeholder}  />
            </div>
        );
    }
}

export default FormInput;