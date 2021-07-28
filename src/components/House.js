import React, { Component } from 'react';
import '../css/Children.css';
import Form1 from './Form1';

class House extends Component {
    render() {
        return (
            <div>
                
                <div className = "category">
                        <span className = "subtitle"><strong>세부 분야 선택</strong></span>
                        <span className = "redFont">중복 선택 가능</span>
                        <div>
                            <button>음식/주방</button>
                            <button>청소 도우미</button>
                            <button>기타</button>
                        </div>
                        
                </div>
                <hr></hr>
                
                <Form1></Form1>
            </div>
        );
    }
}

export default House;