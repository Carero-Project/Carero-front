import React, { Component, Fragment} from 'react';
import '../css/GridTesting.css';
import Header2 from './Header2';
import '../css/Cares.css';

class Cares extends Component {
    render() {
        return (
            
            <Fragment>
                <Header2 value = "케어 구하기"></Header2>
                
                <div id = "wrapper">
                    <div id = "left"></div>
                    <div id = "center">
                        <div id = "selectBox1">
                            <select name = "jobs">
                                <option value = "">직업선택</option>
                                <option>아동</option>
                                <option>노인/장애인</option>
                                <option>반려 동물</option>
                                <option>가사 도우미</option>
                            </select>
                            
                            <select name = "area">
                                <option value = "">지역선택</option>
                                <option>서울</option>
                                <option>경기</option>
                                <option>인천</option>
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
                    </div>
                    <div id = "right"></div>
                </div>
            </Fragment>
                
            
        );
    }
}

export default Cares;