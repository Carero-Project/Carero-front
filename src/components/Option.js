import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../css/Option.css';
import Children from './Children';
import Elderly from './Elderly';
import Pet from './Pet';
import House from './House';

class Option extends Component {

    
    childrenButton = () => {
        const element = <Children></Children>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    elderlyButton = () =>{
        const element = <Elderly></Elderly>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    petButton = () =>{
        const element = <Pet></Pet>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    houseButton = () =>{
        const element = <House></House>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    render() {
        return (
            <Fragment>
                
                <div className ="wrapper">
                    
                    
                    <div className = "category">
                        <span className = "subtitle"><strong>분야 선택</strong></span>
                        <div >
                            <button onClick = {this.childrenButton}>아동</button>
                            <button onClick = {this.elderlyButton}>노인/장애인</button>
                            <button onClick = {this.petButton}>반려 동물</button>
                            <button onClick = {this.houseButton}>가사 도우미</button>
                        </div>
                    
                    </div>
                    <hr></hr>
                    <p id = "putTarget"></p>
                    {/* <Children></Children> */}

                </div>
                
            </Fragment>
        );
    }
}

export default Option;