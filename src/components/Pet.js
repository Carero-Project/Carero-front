import React, { Component } from 'react';
import '../css/Children.css';
import Form1 from './Form1';
class Pet extends Component {
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
                
                <div className = "category">
                        <span className = "subtitle"><strong>반려동물 정보</strong></span>
                        <br></br>
                        <div className = "category3">

                            <div>
                                <div className = "left3">
                                    <span>반려동물 종</span>
                                </div>
                                <div className = "right3">
                                    <button>고양이</button>
                                    <button>개</button>
                                    <button>기타</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                <span>반려동물 성별</span>
                                </div>
                                <div className = "right3">
                                <button>남</button>
                                <button>여</button>
                                
                                

                                </div>
                            </div>
                            
                            <div>
                                <div className = "left3">
                                <span>반려동물 나이</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)만 5세"></textarea>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                <span>특이사항 입력</span>
                                <br></br>
                                <span className = "redFont">기타 특이사항을 입력해 주세요</span>
                                </div>
                                <div className = "right3">
                                <textarea placeholder="ex)피부병^^"></textarea>
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

export default Pet;