import React, { Component, Fragment } from 'react';
import '../css/SignIn.css';
import Header2 from './Header2';
class SignIn extends Component {
    render() {
        return (
            <Fragment>
            <Header2 value = "회원가입"></Header2>
            <h1>SignIn Page</h1>
            <div id = "wrapper">
                <div id = "left"></div>

                <div id = "center">

                    {/* 회원가입 Box Start */}
                    <h3 style ={{marginLeft : "-35vw"}}>회원가입</h3>
                    <div className = "signIn1Box">
                        <div className = "category3"> 
                        <div>
                            <div className = "left3" style = {{width : "45%"}}>                             
                                <p>* 이름</p>
                                <br/>
                                <p>* 아이디</p>
                                <br/>
                                <p>* 비밀번호</p>
                                <br/>
                                <p>* 비밀번호 확인</p>
                                <br/>
                                <p>* 성별</p>
                                <br/>
                                <p>* 현재 거주지</p>
                                <br/>
                                <p>* 나이</p>
                                <br/>
                                <p>* 이메일주소</p>
                            </div>
                            <div className = "right3" style = {{width : "55%", marginTop : '12px'}}>

                                <div className = "signInCenterRight">
                                <textarea value = "signInName"></textarea>
                                </div>

                                <div className = "signInCenterRight">
                                <textarea value = "signInId" placeholder = "아이디4글자 이상, 10글자 이하" ></textarea>
                                <button className = "signInDoubleCheckButton"></button>
                                </div>

                                <div className = "signInCenterRight">
                                <textarea value = "password"></textarea>
                                <p style = {{fontSize : '6px', color : 'red'}}>6자리 이상, 문자와 숫자 반드시 사용해주세요</p>
                                </div>

                                <div className = "signInCenterRight">
                                <textarea value = "passwordCheck"></textarea>
                                <p style = {{fontSize : '6px', color : 'red'}}>비밀번호를 입력해주세요</p>
                                </div>

                                <div className = "signInCenterRight">
                                <button>남</button> <button>여</button>
                                </div>

                                <div className = "signInCenterRight">
                                <select>
                                    <option>시/도 선택</option>
                                </select>
                                <select>
                                    <option>구/군선택</option>
                                </select>
                                </div>
                                
                                <div className = "signInCenterRight">
                                <span>만 <textarea value = "signInAge"></textarea>세</span>
                                </div>

                                <div className = "signInCenterRight">
                                <textarea value ="signInEmail"></textarea>
                                <button className = "signInDoubleCheckButton"></button>
                                </div>


                            </div>
                        </div>
                        </div>
                    </div>   
                    {/* 여기까지가 회원가입 Box */}


                    {/* 본인인증 Box Start */}
                    <h3 style ={{marginLeft : "-35vw"}}>본인인증</h3>
                    <div className = "signIn1Box">
                        <div className = "category3"> 
                        <div>

                            <div className = "left3" style = {{width : "45%"}}>                             
                                <p>* 휴대폰 번호 인증</p>
                            </div>

                            <div className = "right3" style = {{width : "55%", marginTop : '12px'}}>

                                <div className = "signInCenterRight">
                                    <span>통신사</span>
                                    <select>
                                        <option>SKT</option>
                                        <option>KT</option>
                                        <option>LG U+</option>
                                        <option>알뜰폰</option>
                                    </select>
                                    <br/>

                                    <span>이름</span>
                                    <textarea></textarea>
                                    <br/>

                                    <span>전화번호</span>
                                    <input type = "tel" pattern = "[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="01011112222"></input>
                                    
                                    <input placeholder="인증번호"></input>
                                    <button>본인인증</button>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                    {/* 여기까지가 본인인증 */}

                    <br/><br/><br/>

                    {/* 개인정보 동의 Box Start */}
                    <h3 style ={{marginLeft : "-35vw"}}>개인정보 동의</h3>
                    <div className = "signInAgreeBox">
                        <input type = "checkbox"></input><span>전체동의</span><br/><br/>
                        <input type = "checkbox"></input><span>(필수)개인정보 처리방침 동의</span><br/><br/>
                        <input type = "checkbox"></input><span>(필수)이용약관에 동의</span><br/><br/>
                        <input type = "checkbox"></input><span>(선택)인테리어 정보 및 마케팅 수신에 동의</span>
                        
                    </div>
                    {/* 여기까지가 개인정보 동의 */}



                    <button id = "signInButton"></button>


                    
                </div>
                <div id = "right"></div>
            </div>
            </Fragment>
        );
    }
}

export default SignIn;