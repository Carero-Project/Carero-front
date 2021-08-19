import React, { Component, Fragment } from 'react';

class CatPet extends Component {
    render() {
    
    if (this.props.subCats.indexOf("반려동물") != -1){
        var a = <span className = "typeColoredCover">반려동물</span>;}
    else if (this.props.subCats.indexOf("반려동물") == -1){
        var a = <span className = "typeCover">반려동물</span>;}
    
    if (this.props.subCats.indexOf("조련사") != -1){
        var a1 = <span className = "typeColoredCover">조련사</span>;}
    else if (this.props.subCats.indexOf("조련사") == -1){
        var a1 = <span className = "typeCover">조련사</span>;}

    if (this.props.subCats.indexOf("펫시터") != -1){
        var a2 = <span className = "typeColoredCover">펫시터</span>;}
    else if (this.props.subCats.indexOf("펫시터") == -1){
        var a2 = <span className = "typeCover">펫시터</span>;}

    if (this.props.subCats.indexOf("도그워커") != -1){
        var a3 = <span className = "typeColoredCover">도그워커</span>;}
    else if (this.props.subCats.indexOf("도그워커") == -1){
        var a3 = <span className = "typeCover">도그워커</span>;}

        return (
            <Fragment>
                {a}{a1}{a2}{a3}
            </Fragment>
        );
    }
}

export default CatPet;