import React, { Component } from 'react';
import '../css/Children.css';
import group_plus from '../assets/group_plus.png';
// 공고 등록을 위한 페이지

class Form1 extends Component {

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
                    <span className = "subtitle"><strong>희망 구직자 선택</strong></span>
                    <span className = "redFont">*필수</span>
                        <br></br>
                        <div className = "category3">

                            <div>
                                <div className = "left3">
                                    <span>희망 나이</span>
                                    <br></br>
                                    <span className = "redFont">연령 상관 없으시면,연령무관이라고 작성해주세요.</span>
                                </div>
                                <div className = "right3">
                                    <textarea placeholder = "20대"></textarea>
                                    <span>대</span>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>희망 성별</span>
                                </div>
                                <div className = "right3">
                                    <button>남</button>
                                    <button>여</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>희망 경력</span>
                                </div>
                                <div className = "right3">
                                    <button>1년이상</button>
                                    <button>2년이상</button>
                                    <button>3년이상</button>
                                    <button>5년이상</button>
                                    <button>경력무관</button>
                                </div>
                            </div> 

                            <div>
                                <div className = "left3">
                                    <span>희망 학력</span>
                                </div>
                                <div className = "right3">
                                    <button>중졸이상</button>
                                    <button>고졸이상</button>
                                    <button>대학2년제</button>
                                    <button>대학4년제</button>
                                    <button>학력무관</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>희망 국적</span>
                                    <br></br>
                                    <span className = "redFont">중복 선택 가능</span>
                                </div>
                                <div className = "right3">
                                    <button>한국인</button>
                                    <button>조선족</button>
                                    <button>동남아시아</button>
                                    <button>영어권</button>
                                    <button>국적무관</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>*필수사항 입력</span>
                                    <br></br>
                                    <span className = "redFont">원하시는 필수 사항을 입력해주세요</span>
                                </div>
                                <div className = "right3">
                                    <textarea></textarea>
                                </div>
                             </div> 

                            <div>
                                <div className = "left3">
                                    <span>*우대사항 입력</span>
                                    <br></br>
                                    <span className = "redFont">원하시는 우대사항을 입력해주세요</span>
                                </div>
                                <div className = "right3">
                                    <textarea></textarea>
                                </div>
                            </div>

                        </div>
                </div>
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>근무 장소</strong></span>
                    <br></br>
                    <div className = "category3">
                        <div>
                            <div className = "left3">
                                <span>지역 선택</span>
                            </div>
                            <div className = "right3">
                                <button>서울특별시^^</button>
                                <button>시/군/구^^</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>근무지 조건 입력</strong></span>
                    <br></br>
                    <div className = "category3">
                        <div>
                            <div className = "left3">
                                <span>근무 요일</span>
                            </div>
                            <div className = "right3">
                                <button>월</button>
                                <button>화</button>
                                <button>수</button>
                                <button>목</button>
                                <button>금</button>
                                <button>토</button>
                                <button>일</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>근무 형태</span>
                            </div>
                            <div className = "right3">
                                <button>출퇴근</button>
                                <button>입주</button>
                                <button>재택</button>
                                <button>협의</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>근무 시작일</span>
                            </div>
                            <div className = "right3">
                                <button>연도^</button>
                                <button>월^</button>
                                <button>일^</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>근무기간</span>
                            </div>
                            <div className = "right3">
                                <button>하루</button>
                                <button>1주일 이하</button>
                                <button>1주일 이상</button>
                                <button>1개월 이상</button>
                                <button>3개월 이상</button>
                                <button>6개월 이상</button>
                                <button>협의</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>급여</span>
                            </div>
                            <div className = "right3">
                                <button>주급</button>
                                <button>월급</button>
                                <button>시급</button>
                                <button>협의</button>
                                <textarea placeholder="9000원"></textarea>
                                <span>원</span>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>CCTV 설치 여부</span>
                            </div>
                            <div className = "right3">
                                <button>있음</button>
                                <button>없음</button>
                                <button>설치예정</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>가족 현황</span>
                            </div>
                            <div className = "right3">
                                <textarea placeholder = "4"></textarea>
                                <span>인 가구</span>
                            </div>
                        </div>

                        <div>
                            {/* <div className = "left3"> */}
                            <div> 
                                <span>주요 업무 소개란</span>
                                <span className = "redFont">원하시는 주요 업무를 작성해 주세요</span>
                            </div>
                            <br></br>
                            
                                <textarea className = "largeText" >todo</textarea>
                            
                            
                        </div>

                        
                    </div> 
                </div> 

                <div className = "category">
                    <span className = "subtitle"><strong>*입력 선택 사항</strong></span>
                    <br></br>
                    <div className = "category3">
                        <div>
                            <div className = "left3">
                                <span>보험가입 여부</span>
                            </div>
                            <div className = "right3">
                                <button>유</button>
                                <button>무</button>
                            </div>
                        </div>

                        <div>
                            <div className ="left3">
                                <span>면접시 제출 서류</span>
                            </div>
                            <textarea className = "largeText" placeholder="ex)이력서"></textarea>
                        </div>
                        <div>
                            <div className = "left3">
                                계약서 작성 여부
                            </div>
                            <div className = "right3">
                                <button>유</button>
                                <button>무</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>면접비</span>
                            </div>
                            <div className = "right3">
                                <textarea placeholder = "10000"></textarea>
                                <span>원</span>
                            </div>
                        </div>

                    </div> 
                </div> 
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>공고 등록 입력창</strong></span>
                    <br></br>
                    <div className = "category3">
                        <div className = "left3">
                            <span>공고 제목: 헤드라인에 표시될 제목</span>
                            <span className = "redFont">원하시는 제목을 작성해 주세요</span>
                            <br></br>
                            <span className = "redFont">15자 이내로 작성해주세요</span>
                        </div>
                        <textarea className = "largeText" placeholder = "ex)친절하신분 원합니다!todo"></textarea>
                    </div>
                </div>
                <hr></hr>

                <div className = "category">
                    <div className = "category3">
                        <div>
                            <div className = "left">
                                <span className = "subtitle"><strong>채용 공고 사진 등록창</strong></span>
                            </div>
                            <div className = "right3">
                                <span className = "redFont">*선택</span>
                            </div>
                        </div>
                        <div>
                            <div className = "left3">
                                <span className = "redFont">헤드라인에 표시될 사진을 추가하실 수 있으십니다.</span>
                                <span className = "redFont">만약에 추가하시지 않으면 기본 사진으로 등록됩니다.</span>
                            </div>
                        </div>

                        <div>
                            <img src = {group_plus}></img>
                        </div>
                    </div>
                </div>





                <div className = "categoryAgree">
                    <span><strong>[이용약관 및 개인 정보 수집 이용 동의]</strong></span>
                </div>
                <button>채용공고 등록</button>
            </div>
        );
    }
}

export default Form1;