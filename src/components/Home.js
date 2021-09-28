import React, { Component } from 'react';
import HomeProfile from '../assets/HomeProfile.png';
import HomeText from '../assets/HomeText.png';
import ButtonChild from '../assets/ButtonChild.png';
import ButtonElderly from '../assets/ButtonElderly.png';
import ButtonHouse from '../assets/ButtonHouse.png';
import ButtonPet from '../assets/ButtonPet.png';
import HomeDots from '../assets/HomeDots.png';
import HomeImage2 from '../assets/HomeImage2.png';
import HomeReviews from '../assets/HomeReviews.png';
import HomeMoreButton from '../assets/HomeMoreButton.png';
import HomeGuide from '../assets/HomeGuide.png';
import HomeNews from '../assets/HomeNews.png';
import HomeBlack from '../assets/HomeBlack.png';
import '../css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className = "wrapper2">
                <meta name = "viewport" content = "width=device-width, intitial-scale=1.0"></meta>
                <h1>This is home page</h1>
                <div className = "box1">
                    
                </div>
                
                <div calssName = "box2">
                    <p>신뢰할 수 있는</p>
                    <p>케어들을 만나보세요</p>
                    <img src = {HomeProfile}></img>
                    <br></br>
                    <img src = {HomeText}></img>
                    <br></br>
                    <img src = {HomeDots}></img>
                    <div className = "boxButton">
                        <button id = "ButtonChild">아동</button>
                        <img src = {ButtonElderly}></img>
                        <button><img src = {ButtonHouse}></img></button>
                        <button><img src = {ButtonPet}></img></button>
                    </div>
                    <img src = {HomeImage2}></img>
                    <div className = "box3"></div>
                    <img src = {HomeReviews}></img>
                    <br></br>
                    <button><img src = {HomeMoreButton}></img></button>
                    <div className = "box3"></div>

                    <div className = "guideWrapper">
                        <h1>케어로 이용방법</h1>
                        <button id = "guideShow2">채용자 회원</button>
                        <button id = "guideShow2">케어 회원</button>
                    <img src = {HomeGuide}></img>
                    </div>

                    <br></br>
                    <img src = {HomeNews}></img>
                    <br></br>
                    <img src = {HomeBlack}></img>
                </div>

                
            
            </div>
        );
    }
}

export default Home;