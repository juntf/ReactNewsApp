import React, {Component} from 'react';

import { Flex } from 'antd-mobile';
import "../assets/styles/Subject.less";


class Subject extends Component {
    render() {
        return (
            <div className="subject">

                {/*第一行 */}
                <Flex>
                    <Flex.Item>
                        <a href="#" >
                            <i></i>
                            <p>Java EE  </p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -50}}></i>
                            <p>全站设计</p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -100}}></i>
                            <p>HS前瞻</p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -150}}></i>
                            <p>Java EE  </p>
                        </a>
                    </Flex.Item>
                </Flex>

                {/*第二行*/}
                <Flex>
                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -200}}></i>
                            <p>Java EE  </p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -250}}></i>
                            <p>Java EE  </p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>
                        <a href="#" >
                            <i style={{backgroundPositionX: -300}}></i>
                            <p>C++ </p>
                        </a>
                    </Flex.Item>

                    <Flex.Item>


                    </Flex.Item>

                </Flex>
            </div>
        );
    }
}

export default Subject;