import React, { Component } from 'react';
import '../css/Children.css';
import group_plus from '../assets/group_plus.png';
import Form1 from './Form1';
import axios from 'axios';

class Children extends Component {

    constructor(props){
        super(props);
        this.state = {background : 'blue',textColor:'pink'};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor = () => {
        this.setState({
            background :'red',
            textColor:'orange'
        });
    }
    render() {
        return (
            <div>
                
                <div className = "category">
                        <span className = "subtitle"><strong>세부 분야 선택</strong></span>
                        <span className = "redFont">중복 선택 가능</span>
                        <div>
                            <button style = {{backgroundColor : this.state.background, color: this.state.textColor}} onClick = {this.changeColor}>베이비 시터</button>
                            <button>등하원 시터</button>
                            <button>학습/영어 시터</button>
                        </div>
                        <div>
                            <button>산후 도우미</button>
                            <button>놀이 시터</button>
                            <button>기타</button>
                        </div>
                </div>
                <hr></hr>
                
                <div className = "category">
                        <span className = "subtitle"><strong>아동 정보</strong></span>
                        <span className = "redFont">*필수</span>
                        <br></br>
                        <div className = "category3">
                            <div>
                                <div className = "left3">
                                <span>아동 성별</span>
                                </div>
                                <div className = "right3">
                                <button>남</button>
                                <button>여</button>
                                
                                

                                </div>
                            </div>
                            
                            <div>
                                <div className = "left3">
                                <span>아동 나이</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)만 5세"></textarea>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                <span>특이사항 입력</span>
                                <br></br>
                                <span className = "redFont">ADH,자폐,CP 등의 장애 여부 혹은 기타 특이사항을 입력해 주세요</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)ADHD"></textarea>
                                </div>
                            </div>

                        </div>
                        
                        
                </div>
                <hr></hr>
                
                <Form1></Form1>
            </div>
        );
    }
}

export default Children;