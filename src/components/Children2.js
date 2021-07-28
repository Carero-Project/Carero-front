import React, { Component } from 'react';
import '../css/Children.css';
import Form2 from './Form2';
class Children2 extends Component {

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
                <h1> This is Children 2 page</h1>
                <div className = "category">
                        <span className = "subtitle"><strong>세부 분야 선택</strong></span>
                        <span className = "redFont">중복 선택 가능</span>
                        <div>
                            <button style = {{backgroundColor : this.state.background, color: this.state.textColor}} onClick = {this.changeColor}>베이비 시터</button>
                            <button>등하원 시터</button>
                            <button>학습/영어 시터</button>
                        </div>
                        <div>
                            <button>산후 도우미</button>
                            <button>놀이 시터</button>
                            <button>기타</button>
                        </div>
                </div>
                <hr></hr>
                
                <Form2></Form2>

            </div>
        );
    }
}

export default Children2;