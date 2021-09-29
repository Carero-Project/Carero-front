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
import HomeGuide from '../assets/howToUseChae.png';
import HomeGuide2 from '../assets/howToUseCarero.png';
import HomeNews from '../assets/HomeNews.png';
import HomeBlack from '../assets/HomeBlack.png';
import Group1152 from '../assets/group1152.png';
import Group1153 from '../assets/group1153.png';
import Group1155 from '../assets/group1155.png';
import CareroNews from '../assets/aboutCareroNews.png';
import '../css/Home.css';
import Header2 from './Header2';

// function getPhoto (){
//     const photoStatus = [0,1];
//     return photoStatus[0];
// }

class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         thatSrc : {HomeGuide}
    //     };
    // };
    // state = {
    //     thatSrc : "../assets/howToUseChae.png",
    // };

    // changeGuideImage = () =>{
    //     // document.getElementById("howToUsetarget").src = {HomeGuide2};
    //     this.setState( () => {
    //         return {thatSrc : {HomeGuide2}};
    //     } );

    // };
    state = {
        flag : 0
    }

    goZERO = () =>{
            this.setState({
            flag : 0
        })
    }
    goONE = () =>{
            this.setState({
            flag : 1
        })
    }

    getPhoto = (e) =>{
        const photoStatus = [0,1];
        return photoStatus[e];
    }

    render() {
        
        let photo;

        if(this.state.flag == 0){
            photo = <img src = {HomeGuide}></img>
        }
        else{
            photo = <img src = {HomeGuide2}></img>
        }

        return (
            <div className = "wrapper2">
                {/* <meta name = "viewport" content = "width=device-width, intitial-scale=1.0"></meta> */}
                {/* <h1>This is home page</h1> */}
                <div className = "box1">
                    <Header2 value = ""></Header2>
                </div>
                
                <div calssName = "box2">

                    
                    {/* <p className = "homeTextDecoration">신뢰할 수 있는</p>
                    <p className = "homeTextDecoration">케어들을 만나보세요</p> */}
                    {/* group1153 = 신뢰할 수 있는 케어들을 만나보세요 */}
                    <img src = {Group1153} style = {{marginLeft : '-70%'}}></img>
                    <br/>
                    <img src = {HomeProfile}></img> 
                    <br></br>
                    <img src = {HomeText}></img>
                    <br></br>
                    <img src = {HomeDots}></img>

                    {/* 버튼 이미지로 대체한것들 */}
                    <div className = "boxButton">
                        {/* <button className = "homeButtonChild" style = {{backgroundImage : "../assets/ButtonChild.png"}}></button>
                        <button className = "homeButtonChild"></button>
                        <button className = "homeButtonChild"></button>
                        <button className = "homeButtonChild"></button> */}
                        <img src = {ButtonChild}></img>
                        <img src = {ButtonElderly}></img>
                        <img src = {ButtonHouse}></img>
                        <img src = {ButtonPet}></img>
                    </div>

                    {/* 케어로 뉴스 */}
                    <img src ={Group1152}></img>
                    <img src = {CareroNews}></img>
                    
                    {/* 케어로 후기 */}
                    <div className = "box3"></div>

                        <img src = {HomeReviews}></img>
                        <br></br>
                        <button><img src = {HomeMoreButton}></img></button>

                    <div className = "box3"></div>

                    

                    <div className = "guideWrapper">
                        {/* 케어로 이용방법*/}
                        <img src = {Group1155}></img>
                        <br/>
                        <button id = "guideShow1" onClick = {this.goZERO}></button>
                        <button id = "guideShow2" onClick = {this.goONE}></button>
                        <br/>
                        {photo}
                        {/* <img id = "howToUsetarget" src = {photo}></img> */}
                    </div>

                    
                    
                    <img src = {HomeBlack}></img>

                </div>

                
            
            </div>
        );
    }
}

export default Home;