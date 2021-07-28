import React, { Component,Fragment } from 'react';
import '../css/GridTesting.css';
import Option from './Option';
import Header2 from './Header2';

class GridTesting extends Component {

    testing = () =>{

    }

    render() {
        return (
            <Fragment>
            <Header2 value = "채용공고 등록하기"></Header2>
            
            <div id = "wrapper">
                <div id = "left"></div>
                <div id = "center">
                    
                    <Option></Option>
                    

                </div>
                <div id = "right"></div>
            </div>
            </Fragment>
        );
    }
}




export default GridTesting;