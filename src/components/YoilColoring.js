import React, { Component, Fragment } from 'react';
// 선택한 요일에 class부여
class YoilColoring extends Component {

    render() {

    if (this.props.e.indexOf("월") != -1){
        var a = <span className = "yoilColored">월</span>;}
    else if (this.props.e.indexOf("월") == -1){
        var a = <span className = "yoil">월</span>;}
    
    if (this.props.e.indexOf("화") != -1){
        var a1 = <span className = "yoilColored">화</span>;}
    else if (this.props.e.indexOf("화") == -1){
        var a1 = <span className = "yoil">월</span>;}
    
    if (this.props.e.indexOf("수") != -1){
        var a2 = <span className = "yoilColored">수</span>;}
    else if (this.props.e.indexOf("수") == -1){
        var a2 = <span className = "yoil">수</span>;}
    
    if (this.props.e.indexOf("목") != -1){
        var a3 = <span className = "yoilColored">목</span>;}
    else if (this.props.e.indexOf("목") == -1){
        var a3 = <span className = "yoil">목</span>;}

    if (this.props.e.indexOf("금") != -1){
        var a4 = <span className = "yoilColored">금</span>;}
    else if (this.props.e.indexOf("금") == -1){
        var a4 = <span className = "yoil">금</span>;}
    
    if (this.props.e.indexOf("토") != -1){
        var a5 = <span className = "yoilColored">토</span>;}
    else if (this.props.e.indexOf("토") == -1){
        var a5 = <span className = "yoil">토</span>;}
    
    if (this.props.e.indexOf("일") != -1){
        var a6 = <span className = "yoilColored">일</span>;}
    else if (this.props.e.indexOf("일") == -1){
        var a6 = <span className = "yoil">일</span>;}
    
        return (
        <Fragment>
            {a}{a1}{a2}{a3}{a4}{a5}{a6}
        </Fragment>
            
        );
    }
}

export default YoilColoring;