import React, { Component } from 'react';
import '../css/Children.css';
import Form2 from './Form2';

class Elderly2 extends Component {
    render() {
        return (
            <div>
                
                <div className = "category">
                        <span className = "subtitle"><strong>세부 분야 선택</strong></span>
                        <span className = "redFont">중복 선택 가능</span>
                        <div>
                            <button>활동 보조인</button>
                            <button>간병인</button>
                            <button>요양 보호사</button>
                        </div>
                        <div>
                            <button>간호사</button>
                            <button>물리 치료사</button>
                            <button>기타</button>
                        </div>
                </div>
                <hr></hr>
                
                
                <Form2></Form2>
            </div>
        );
    }
}

export default Elderly2;