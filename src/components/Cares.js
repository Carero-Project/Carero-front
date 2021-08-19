import React, { Component, Fragment} from 'react';
import '../css/GridTesting.css';
import Header2 from './Header2';
import '../css/Cares.css';
import Profile from './Profile';
class Cares extends Component {

    constructor(props){
        super(props);
    } 
    
    Testing12 = () => {
        
        var list4 = document.createElement("h1");
        var vv = document.getElementById("target123");
        var vvs = vv.options[vv.selectedIndex].value;
        var node = document.createTextNode(vvs);
        list4.appendChild(node);
        var target = document.getElementById("selectBox1");
        target.appendChild(list4);
        
    }


    render() {

        const data1 = {
            id: 2,
            title: "최선을 다하겠습니다",
            username: "Choi1234",
            cat: "펫",
            subCats: [
                "조련사",
                "도그워커"
            ],
            city: "서울특별시",
            sigungu: "관악구",
            status: false,
            createdDate: "2021-08-04T17:33:21.774797",
            modifiedDate: "2021-08-04T17:33:21.774797",
            viewCount: 0,
            wageType: "월급",
            wage: "200만원",
            wantedStartDate: "2021-08-12",
            workWeek: "월화수목금"  
    };
        const data2 = {
            id: 3,
            title: "저를 뽑아주세요",
            username: "Mr.Kim",
            cat: "아동",
            subCats: [
                "등하원시터",
                "학습시터"
            ],
            city: "서울특별시",
            sigungu: "성동구",
            status: true,
            createdDate: "2021-08-04T17:33:21.774797",
            modifiedDate: "2021-08-04T17:33:21.774797",
            viewCount: 0,
            wageType: "월급",
            wage: "150만원",
            wantedStartDate: "2021-08-12",
            workWeek: "화수목"  
    };
        const data3 = {
            id: 3,
            title: "맡겨만 주십시오",
            username: "Mr.Kim",
            cat: "노인",
            subCats: [
                "간병인",
                "물리치료사",
                "간호사"
            ],
            city: "서울특별시",
            sigungu: "강남구",
            status: true,
            createdDate: "2021-08-04T17:33:21.774797",
            modifiedDate: "2021-08-04T17:33:21.774797",
            viewCount: 0,
            wageType: "월급",
            wage: "150만원",
            wantedStartDate: "2021-08-12",
            workWeek: "화목토일"  
    };
        const data4 = {
            id: 3,
            title: "10년 경력으로 자신있습니다",
            username: "Mr.Kim",
            cat: "가사",
            subCats: [
                "음식/주방"
            ],
            city: "서울특별시",
            sigungu: "송파구",
            status: true,
            createdDate: "2021-08-04T17:33:21.774797",
            modifiedDate: "2021-08-04T17:33:21.774797",
            viewCount: 0,
            wageType: "월급",
            wage: "150만원",
            wantedStartDate: "2021-08-12",
            workWeek: "월수금"  
        };



        return (
            
            <Fragment>
                <Header2 value = "케어 구하기"></Header2>
                <button onClick = {this.Testing12}>testing button</button>
                <div id = "wrapper">
                    <div id = "left"></div>
                    <div id = "center">
                        <div id = "selectBox1">
                            <span>selectBox1</span>
                            <br></br>
                            <select  onChange = {this.Testing12} name = "jobs" id = "target123">
                                <option value = "">직업선택</option>
                                <option value = "1">아동</option>
                                <option value = "2">노인/장애인</option>
                                <option value = "3">반려 동물</option>
                                <option value = "4">가사 도우미</option>
                            </select>
                            
                            <select name = "area">
                                <option value = "">지역선택</option>
                                <option>서울</option>
                                <option>경기</option>
                                <option>인천</option>
                                <option>Todo</option>
                            </select>

                            <select name = "Todo">
                                <option value = "">선택</option>
                                <option>전체</option>
                                <option>Todo</option>
                            </select>

                            <select name = "gender">
                                <option value = "">성별 선택</option>
                                <option>남</option>
                                <option>여</option>
                            </select>

                            <select name = "order">
                                <option>랭킹순</option>
                                <option>날짜순</option>
                            </select>

                        </div>
                        <div id = "ProfileBox">
                            <span>ProfileBox</span>
                            <Profile data = {data1}></Profile>
                            <Profile data = {data2}></Profile>
                            <Profile data = {data3}></Profile>
                            <Profile data = {data4}></Profile>
                            <Profile data = {data1}></Profile>


                        </div>  
                    </div>
                    <div id = "right"></div>
                </div>
            </Fragment>
                
            
        );
    }
}

export default Cares;