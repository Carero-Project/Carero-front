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
                <div className = "headBar1">
                    <button>홈</button>
                    <button>고객센터</button>
                    <button>공지사항</button>
                </div> 
                <div className = "headBar2">
                    <button>{this.props.value}</button>
                    <span>{this.state.number}</span>
                    <button onClick = {this.goUp}>UP</button>
                    <button onClick = {this.goDown}>DOWN</button>
                    <button onClick = {this.addTesting}>Add Component Testing</button>
                </div>
                
            </Fragment>
            
        );
    }
}

export default Header2;
