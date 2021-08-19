import React, { Component, Fragment } from 'react';
import '../css/Profile.css';
import image21 from '../assets/image21.png';
import YoilColoring from './YoilColoring';
import CatPet from './CatPet';
import CatElderly from './CatElderly';
import CatAdong from './CatAdong';
import CatHouse from './CatHouse';
// 작성한 프로필 
class Profile extends Component {
    constructor(props){
        super(props);  
        // this.state = this.props;
    }

    componentDidMount(){
        // this.YoilColor(this.props.data.workWeek);
    }
    
    getStatus = (status) => {
        if (status === false){
            return "구직중";
        }
        else{
            return "구직완료";
        }
    }

    catColoring = (data) =>{
        console.log(data.cat);
        console.log(data.subCats);
        if ( data.cat == "펫"){
            return <CatPet subCats = {data.subCats}></CatPet>     
        }

        else if ( data.cat == "아동"){
            return <CatAdong subCats = {data.subCats}></CatAdong>
        }

        else if ( data.cat == "노인"){
            return <CatElderly subCats = {data.subCats}></CatElderly>
        }

        else if ( data.cat == "가사"){
            return <CatHouse subCats = {data.subCats}></CatHouse>
        }
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
                    <span>"{data.title}"</span> 
                    <br/>
                    <span style = {{color:"#FB8922"}}>{this.getStatus(this.props.data.status)}</span>
                    <br/>
                    {this.props.data.username}
                    
                    
                </div>
                <div clssName = "rightBox">
                    {this.catColoring(this.props.data)}
                    <br></br>

                    <span>주소</span>
                    <span>{this.props.data.city} {this.props.data.sigungu}</span>
                    <br></br>

                    <span>희망시급</span>
                    <span>{this.props.data.wageType} {this.props.data.wage}</span>
                    <br></br>

                    <span>기간</span>
                    <span>{this.props.data.wantedStartDate}~</span>
                    <br></br>
                    <span>요일</span>
                    <YoilColoring e = {this.props.data.workWeek}></YoilColoring>
                </div>
            </div>
        );
    }
}

export default Profile;