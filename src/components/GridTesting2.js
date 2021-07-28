import React, { Component,Fragment } from 'react';
import '../css/GridTesting.css';
import Option2 from './Option2';
import Header2 from './Header2';

class GridTesting2 extends Component {

    testing = () =>{

    }

    render() {
        return (
            <Fragment>
            <Header2 value = "케어 프로필 등록하기"></Header2>
            <h1> This is Option2 page</h1>
            <div id = "wrapper">
                <div id = "left"></div>
                <div id = "center">
                    
                    <Option2></Option2>
                    

                </div>
                <div id = "right"></div>
            </div>
            </Fragment>
        );
    }
}




export default GridTesting2;