import React, { Component, Fragment } from 'react';
import Header2 from './Header2';
import '../css/Manual.css';
import ManualSub_1 from './ManualSub_1';
class Manual extends Component {

    

    ManualSeeDetail = (e) =>{
        const target2 = document.getElementById("ManualDetailShowBox");
        const put2 = document.createElement(e);
        target2.appendChild(put2);
    }


    render() {
        return (
            <Fragment>
              <Header2 value = "이용안내"></Header2>  
              <div id = "wrapper">
                <div id = "left"></div>
                <div id = "center" style = {{marginTop : "150px"}}>
                <button class = "ManualBigButton">이용안내</button>
                <button class = "ManualBigButton">공지사항</button>
                <hr style = {{ height : '5px', backgroundColor:'#FB8922', border:'none', marginTop : '50px'}}  />
            
                <div id = "ManualButtonsBox"> 
                    <button>서비스 이용</button>
                    <button>케어 회원</button>
                    <button>구인 회원</button>
                    <button>후기</button>
                    <button>랭킹 순위</button>
                    <button>매칭 수수료</button>
                    <button>채팅 기능</button>
                    <button>기타 문의</button>
                </div>

                <div id = "ManualDetailShowBox">
                <ManualSub_1></ManualSub_1>
                </div>

                </div>
                <div id = "right"></div>
              </div>
            </Fragment>
        );
    }
}

export default Manual;