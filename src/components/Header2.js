import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../css/Header2.css';
import Option from './Option';
class Header2 extends Component {

    state = {
        number : 0
    }
    static defaultProps = {
        value : 'default value'
    }

    goUp = () =>{
        this.setState({
            number : this.state.number + 1
        })
    }
    goDown = () =>{
        this.setState({
            number : this.state.number - 1
        })
    }

    addTesting = () =>{
        const element = <Option></Option>;
        ReactDOM.render(element, document.getElementById('roott'));
    }

    render() {
        return (
            <Fragment>
                <span style = {{marginLeft : "-80%", fontSize : "41px", color:"#FB8922", fontWeight : "500"}} >케어로</span>
                <div className = "headBar1">
                   
                    <div className = "left2">
                        <button className = "headerNavigateButton">홈</button>
                        <button className = "headerNavigateButton">고객센터</button>
                        <button className = "headerNavigateButton">공지사항</button>
                    </div>
                
                    <div className = "right2">
                        <button className = "headerNavigateButton">케어구하기</button>
                        <button className = "headerNavigateButton">일자리찾기</button>
                        <button className = "headerNavigateButton">프로필</button>
                        <button className = "headerNavigateButton">로그인</button>
                        <button className = "headerNavigateButton" id = "headerNavigateSignUpBUtton">회원가입</button>
                    </div>       
                            
                    {/* <button>홈</button>
                    <button>고객센터</button>
                    <button>공지사항</button> */}
                </div> 
                <div className = "headBar2">
                    <span id = "headBar2Title">{this.props.value}</span>
                    {/* <span>{this.state.number}</span>
                    <button onClick = {this.goUp}>UP</button>
                    <button onClick = {this.goDown}>DOWN</button>
                    <button onClick = {this.addTesting}>Add Component Testing</button> */}
                </div>
                
            </Fragment>
            
        );
    }
}

export default Header2;
