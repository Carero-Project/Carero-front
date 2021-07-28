import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../css/Option.css';
import Children2 from './Children2';
import Elderly2 from './Elderly2';
import Pet2 from './Pet2';
import House2 from './House2';

class Option2 extends Component {

    
    childrenButton = () => {
        const element = <Children2></Children2>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    elderlyButton = () =>{
        const element = <Elderly2></Elderly2>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    petButton = () =>{
        const element = <Pet2></Pet2>;
        ReactDOM.render(element, document.getElementById("putTarget"));
    }

    houseButton = () =>{
        const element = <House2></House2>;
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

export default Option2;