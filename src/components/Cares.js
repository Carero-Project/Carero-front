import React, { Component,Fragment } from 'react';
import '../css/GridTesting.css';
import Header2 from './Header2';

class Cares extends Component {
    render() {
        return (
            
            <Fragment>
            <Header2 value = "케어 구하기"></Header2>
            
            <div id = "wrapper">
                <div id = "left"></div>
                <div id = "center" >
                    hello
                    
                    

                </div>
                <div id = "right"></div>
            </div>
            </Fragment>
                
            
        );
    }
}

export default Cares;