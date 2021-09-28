import React, { Component, Fragment } from 'react';
import '../css/ManualSub.css';


class ManualSub_1 extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
          flag: 0 
        };
      };

    Expanding = () =>{
        // if (flag === 0){
            const target = document.getElementById("sub");
            const put = document.createElement("span");
            const node = document.createTextNode("개인 맞춤형 헬스 케어 분야(아동, 노인, 장애인, 반려동물, 가사도우미)에서 개인 간의 구인 구직을 연결해 주는 플랫폼 서비스 입니다.");
            put.appendChild(node);
            target.appendChild(put);
            console.log(put);
            console.log(target);
        //     this.setState({ flag : this.state.flag + 1 })
        // }

        // else{
        //     const target = document.getElementById("sub");
        //     target.document.removeChild();
        //     this.setState({ flag : this.state.flag - 1})

        // }
    }




    render() {
        return (
            <Fragment>
            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">01</span>
                <span className = "ManualSubTitle">케어로 서비스 소개</span>
                <button onClick = {this.Expanding} className = "ManualDetalButton"></button>
                <hr></hr>
                <div className = "ManualSubDetailBox" id = "sub"></div>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">02</span>
                <span className = "ManualSubTitle">미성년자 혹은 외국인도 서비스 이용이 가능한가요?</span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">03</span>
                <span className = "ManualSubTitle">프로필 상의 이름을 변경하고 싶어요</span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">04</span>
                <span className = "ManualSubTitle">케어 서비스 카테고리에는 어떤 것이 있나요? </span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">05</span>
                <span className = "ManualSubTitle">가입비, 열람비 등 수수료가 있나요?</span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">06</span>
                <span className = "ManualSubTitle">아이디 / 비밀번호 찾기는 어떻게 하나요?</span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

            <div className = "ManualSubWrapper">
                <span className="ManualTitleNumber">07</span>
                <span className = "ManualSubTitle">회원 탈퇴는 어떻게 하나요?</span>
                <button className = "ManualDetalButton"></button>
                <hr></hr>
            </div>

           

            </Fragment>
        );
    }
}

export default ManualSub_1;