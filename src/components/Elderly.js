import React, { Component } from 'react';
import '../css/Children.css';
import Form1 from './Form1';

class Elderly extends Component {
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
                
                <div className = "category">
                        <span className = "subtitle"><strong>대상자 정보</strong></span>
                        <br></br>
                        <div className = "category3">
                            <div>
                                <div className = "left3">
                                <span>대상자 성별</span>
                                </div>
                                <div className = "right3">
                                <button>남</button>
                                <button>여</button>
                                
                                

                                </div>
                            </div>
                            
                            <div>
                                <div className = "left3">
                                <span>대상자 나이</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)만 5세"></textarea>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>간병 장소</span>
                                </div>
                                <div className = "right3">
                                    <button>병원</button>
                                    <button>가정</button>
                                    <button>기타</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>근무 시간</span>
                                </div>
                                <div className = "right3">
                                    <button>주간</button>
                                    <button>야간</button>
                                    <button>기타</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                <span>특이사항 입력</span>
                                <br></br>
                                <span className = "redFont">장애 여부 혹은 기타 특이사항을 입력해 주세요</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)치매,척수장애"></textarea>
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

export default Elderly;