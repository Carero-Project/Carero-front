import React, { Component, Fragment } from 'react';
import Header2 from './Header2';
import careroProfileCut from '../assets/careroProfileCut.png';
import '../css/CareProfile.css';



class CareProfile extends Component {
    render() {
        return (
            <Fragment>
                <Header2 value = "케어 프로필"></Header2>
                <div id = "wrapper">
                    <div id = "left"></div>
                    <div id = "center">

                        <div id = "careProfileProflieBox">
                            <div>
                            <img src = {careroProfileCut} hegith = '300px' width = '300px'></img>
                            </div>
                            <div>
                                <br/>
                                <p style={{marginTop:'50px'}}>아이디</p>
                                <p>랭킹</p>
                                <p>별점</p>
                                <p>이메일</p>
                            </div>

                            <div>
                                <button id = "zzimhagi"></button><br/>
                                <span style={{fontSize:'10px',  color : 'orange'}}>찜하기</span>
                                <p>홍길동</p>
                                <p>100위</p>
                                <p>별별별별별</p>
                                <p>abcde@naver.com</p>
                            </div>
                        </div>
                        <div className = "careProfileBelowBox">내 프로필 수정 (케어,고용인)</div>
                        <div className = "careProfileBelowBox">내 구직 현황</div>
                        <div className = "careProfileBelowBox">내 구인 현황</div>
                        <div className = "careProfileBelowBox">찜한 채용 공고 보기</div>
                        <div className = "careProfileBelowBox">찜한 케어 보기</div>
                        <div className = "careProfileBelowBox">보험 가입</div>
                        <div className = "careProfileBelowBox">신고 내역</div>
                        <div className = "careProfileBelowBox">회원 탈퇴</div>
                        <div className = "careProfileBelowBox">비밀번호 재설정</div>
                        <div className = "careProfileBelowBox">케어로 서비스 이용동의</div>















                    </div>
                    {/* center */}
                    <div id = "right"></div>
                </div>
            </Fragment>
        );
    }
}

export default CareProfile;