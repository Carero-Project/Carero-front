import React, { Component } from 'react';
import '../css/Children.css';
import group_plus from '../assets/group_plus.png';
import group_card from '../assets/group_card.png';
import group_plus2 from '../assets/group_plus2.png';

class Form2 extends Component {

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
                    <span className = "subtitle"><strong>구직자 정보 필수 입력란</strong></span>
                    <span className = "redFont">*필수</span>
                        <br></br>
                        <div className = "category3">


                            <div className = "category3">
                                <div>
                                    <div className = "left3">
                                        <span>현재 거주지</span>
                                    </div>
                                    <div className = "right3">
                                        <button>서울특별시^^</button>
                                        <button>시/군/구^^</button>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className = "left3">
                                    <span>성별</span>
                                </div>
                                <div className = "right3">
                                    <button>남</button>
                                    <button>여</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>국적</span>
                                </div>
                                <div className = "right3">
                                    <button>한국인</button>
                                    <button>조선족</button>
                                    <button>동남아시아</button>
                                    <button>영어권</button>
                                </div>
                            </div>

                            <div>
                                <div className = "left3">
                                    <span>나이</span>
                                </div>
                                <div className = "right3">
                                    <textarea placeholder = "20대"></textarea>
                                    <span>대</span>
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



                        </div>
                </div>
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>구직자 정보 선택 입력란</strong></span>
                    <span className = "redFont">*필수</span>
                    <br></br>
                    <div className = "category3">

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
                                <span>자녀 여부</span>
                            </div>
                            <div className = "right3">
                                <button>있음</button>
                                <button>없음</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>연락 가능 시간</span>
                                <span className = "redFont">중복 선택 가능</span>
                            </div>
                            <div className = "right3">
                                <button>오전</button>
                                <button>점심</button>
                                <button>오후</button>
                                <button>저녁</button>
                                <button>종일</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>상세 정보 입력</span>
                                <span className = "redFont">자기소개 등 상세 정보를 입력해 주세요</span>
                                <span className = "redFont">상세하게 작성하셔야 매칭 확률이 높아집니다.</span>
                            </div>
                        </div>
                        <div><textarea placeholder="-자기소개 : 안녕하세요 김케어입니다."></textarea></div>
                        

                        
                    </div>
                </div>
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>희망 근무지 입력</strong></span>
                    <span className = "redFont">*필수</span>
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
                    <span className = "subtitle"><strong>희망 근무 조건 입력</strong></span>
                    <span className = "redFont">*필수</span>
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

                        
                    </div> 
                </div> 

                <div className = "category">
                    <span className = "subtitle"><strong>선택 인증 사항</strong></span>
                    <span clssName = "redFont">*선택</span>
                    <br></br>
                    <div className = "category3">
                        
                        <div>
                            <div className = "left3">
                                <span>CCTV 동의 여부</span>
                            </div>
                            <div className = "right3">
                                <button>동의</button>
                                <button>동의 안함</button>        
                            </div>
                        </div>

                        
                        <div>
                            <div className = "left3">
                                <span>보험가입 여부</span>
                            </div>
                            <div className = "right3">
                                <button>동의</button>
                                <button>동의 안함</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>수료증 / 자격증</span>
                            </div>
                            <div className = "right3">
                                <button>[첨부 파일 등록]</button>
                            </div>
                        </div>

                        <div>
                            <div className = "left3">
                                <span>주민등록본</span>
                            </div>
                            <div className = "right3">
                                <button>[첨부 파일 등록]</button>
                            </div>
                        </div>
                        
                        <div>
                            <div className = "left3">
                                <span>가족관계증명서</span>
                            </div>
                            <div className = "right3">
                                <button>[첨부 파일 등록]</button>
                            </div>
                        </div>
                        
                        <div>
                            <div className = "left3">
                                <span>전과 기록 조회</span>
                            </div>
                            <div className = "right3">
                                <button>[첨부 파일 등록]</button>
                            </div>
                        </div>


                    </div> 
                </div> 
                <hr></hr>

                <div className = "category">
                    <span className = "subtitle"><strong>이력서 등록 입력창</strong></span>
                    <span className = "redFont">*필수</span>
                    <br></br>
                    <div className = "category3">
                        <div className = "left3">
                            <span>공고 제목: 헤드라인에 표시될 제목</span>
                            <span className = "redFont">원하시는 제목을 작성해 주세요</span>
                            <br></br>
                            <span className = "redFont">15자 이내로 작성해주세요</span>
                        </div>
                        <textarea className = "largeText" placeholder = "ex)최선을 다하겠습니다!todo"></textarea>
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

                <div className = "category">
                    <div className = "category3">
                        <div>
                            <div className = "left">
                                <span className = "subtitle"><strong>케어로 신원 인증</strong></span>
                            </div>
                            <div className = "right3">
                                <span className = "redFont">*필수</span>
                            </div>
                        </div>
                        <div>
                            <div className = "left3">
                                <span className = "redFont">-신분증의 앞면 사진을 찍어서 올려주세요</span>
                                <span className = "redFont">-주민등록번호의 뒷 6자리와 주소를 꼭 가려주세요</span>
                                <span className = "redFont">-운전면허번호, 여권번호를 꼭 가려주세요</span>
                                <span className = "redFont">-빛 반사에 주의해주세요. 정보 확인이 어렵거나 훼손/유효하지 않은 신분증은 승인 처리가 늦어질 수 있습니다.</span>
                            </div>
                            <div className = "right3">
                                <span className = "redFont">-예시)</span>
                                <img src = {group_card}></img>
                            </div>
                        </div>

                        <div>
                            <img src = {group_plus2}></img>
                        </div>
                    </div>
                </div>




                <div className = "categoryAgree">
                    <span><strong>[이용약관 및 개인 정보 수집 이용 동의]</strong></span>
                </div>
                <button>등록</button>
                <button>수정하기</button>
            </div>
        );
    }
}

export default Form2;