import React, { Component, Fragment } from 'react';
import '../css/Profile.css';
import image21 from '../assets/image21.png';



class Profile extends Component {
    constructor(props){
        super(props);  
        // this.state = this.props;
    }

    componentDidMount(){
        // this.YoilColor(this.props.data.workWeek);
    }
    
    GetStatus = (status) => {
        if (status === false){
            return "구직중";
        }
        else{
            return "구직완료";
        }
    }

    Coloring = (e) =>{
        const style3 = {
            color : "white",
            backgroundColor: "orange"
        };
        console.log(e);
        
        if (e.indexOf("월") != -1){
            var a = <span style = {style3}>월</span>;}
        else if (e.indexOf("월") == -1){
            var a = <span>월</span>;}
        
        if (e.indexOf("화") != -1){
            var a1 = <span style = {style3}>화</span>;}
        else if (e.indexOf("화") == -1){
            var a1 = <span>월</span>;}
        
        if (e.indexOf("수") != -1){
            var a2 = <span style = {style3}>수</span>;}
        else if (e.indexOf("수") == -1){
            var a2 = <span>수</span>;}
        
        if (e.indexOf("목") != -1){
            var a3 = <span style = {style3}>목</span>;}
        else if (e.indexOf("목") == -1){
            var a3 = <span>목</span>;}

        if (e.indexOf("금") != -1){
            var a4 = <span style = {style3}>금</span>;}
        else if (e.indexOf("금") == -1){
            var a4 = <span>금</span>;}
        
        if (e.indexOf("토") != -1){
            var a5 = <span style = {style3}>토</span>;}
        else if (e.indexOf("토") == -1){
            var a5 = <span>토</span>;}
        
        if (e.indexOf("일") != -1){
            var a6 = <span style = {style3}>일</span>;}
        else if (e.indexOf("일") == -1){
            var a6 = <span>일</span>;}
        
        return  <Fragment>
                    {a}{a1}{a2}{a3}{a4}{a5}{a6}
                </Fragment>;
    }
    
    render() {
        const data = this.props.data;
        const style1 = {
            color:"red"
        };
        
        return (
            <div id = "ProfileWrapper">
                <div className = "leftBox">
                    <div id = "imageBox">
                        <img src = {image21}></img>
                    </div>
                    <span>{data.title} {this.props.data.username}</span>
                    <span style = {{color:"#FB8922"}}>{this.GetStatus(this.props.data.status)}</span>
                    <div id = "target321">hello World</div>
                </div>
                <div clssName = "rightBox">
                    <span value = "베이비시터">반려동물</span>
                    <span className = "typeCover">반려동물</span>
                    <span className = "typeCover">조련사</span>
                    <span className = "typeCover">펫시터</span>
                    <span className = "typeCover">도그워커</span>
                    <br></br>
                    <span>주소</span><span>{this.props.data.city} {this.props.data.sigungu}</span>
                    <br></br>
                    <span>희망시급</span><span>{this.props.data.wageType} {this.props.data.wage}</span>
                    <br></br>
                    <span>기간</span><span>{this.props.data.wantedStartDate}~</span>
                    <br></br>
                    <span>요일</span>
                    {this.Coloring(this.props.data.workWeek)}
                </div>
            </div>
        );
    }
}

export default Profile;