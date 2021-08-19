import React, { Component, Fragment } from 'react';

class CatElderly extends Component {
    render() {

    if (this.props.subCats.indexOf("활동보조인") != -1){
        var a = <span className = "typeColoredCover">활동 보조인</span>;}
    else if (this.props.subCats.indexOf("활동보조인") == -1){
        var a = <span className = "typeCover">활동 보조인</span>;}
    
    if (this.props.subCats.indexOf("간병인") != -1){
        var a1 = <span className = "typeColoredCover">간병인</span>;}
    else if (this.props.subCats.indexOf("간병인") == -1){
        var a1 = <span className = "typeCover">간병인</span>;}

    if (this.props.subCats.indexOf("요양보호사") != -1){
        var a2 = <span className = "typeColoredCover">요양 보호사</span>;}
    else if (this.props.subCats.indexOf("요양보호사") == -1){
        var a2 = <span className = "typeCover">요양 보호사</span>;}

    if (this.props.subCats.indexOf("간호사") != -1){
        var a3 = <span className = "typeColoredCover">간호사</span>;}
    else if (this.props.subCats.indexOf("간호사") == -1){
        var a3 = <span className = "typeCover">간호사</span>;}
        
    if (this.props.subCats.indexOf("물리치료사") != -1){
        var a4 = <span className = "typeColoredCover">물리 치료사</span>;}
    else if (this.props.subCats.indexOf("물리치료사") == -1){
        var a4 = <span className = "typeCover">물리 치료사</span>;}
        
        return (
            <Fragment>
                {a}{a1}{a2}{a3}{a4}
            </Fragment>
        );
    }
}

export default CatElderly;