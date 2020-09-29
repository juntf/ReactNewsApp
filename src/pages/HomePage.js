import React, {Component} from 'react';

import '../assets/styles/HomePage.less';
import Header from '../components/Header';
import Banner from "../components/Banner";
import Subject from "../components/Subject";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />

                <Banner />


                {/*学科导航*/}
                <Subject />
            </div>

        );
    }
}

export default HomePage;