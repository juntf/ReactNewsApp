import React, {Component} from 'react';

import { NavBar, SearchBar } from 'antd-mobile';
import Img from "./Img";
import '../assets/styles/Header.less';

class Header extends Component {
    render() {
        return (
            <div className="header">


                <NavBar
                    mode="dark"

                    leftContent={[
                        <Img src="logo.png" height="30" />
                    ]}

                    // Icon标志
                    // icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >
                    <SearchBar placeholder="搜索" maxLength={8} />

                </NavBar>
            </div>
        );
    }
}

export default Header;