import React, { Component } from 'react';
import '../css/Children.css';
import Form2 from './Form2';
class Pet2 extends Component {
    render() {
        return (
            <div>
                
                <div className = "category">
                        <span className = "subtitle"><strong>세부 분야 선택</strong></span>
                        <span className = "redFont">중복 선택 가능</span>
                        <div>
                            <button>조련사</button>
                            <button>펫 시터</button>
                            <button>도그 워커</button>
                        </div>
                        <div>
                            <button>기타</button>
                        </div>
                </div>
                <hr></hr>
                
                <Form2></Form2>
            </div>
        );
    }
}

export default Pet2;