import React, { Component, Fragment } from 'react';

class catAdong extends Component {
    render() {

        if (this.props.subCats.indexOf("베이비시터") != -1){
            var a = <span className = "typeColoredCover">베이비 시터</span>;}
        else if (this.props.subCats.indexOf("베이비시터") == -1){
            var a = <span className = "typeCover">베이비 시터</span>;}
        
        if (this.props.subCats.indexOf("등하원시터") != -1){
            var a1 = <span className = "typeColoredCover">등하원 시터</span>;}
        else if (this.props.subCats.indexOf("등하원시터") == -1){
            var a1 = <span className = "typeCover">등하원 시터</span>;}
    
        if (this.props.subCats.indexOf("학습시터") != -1){
            var a2 = <span className = "typeColoredCover">학습 시터</span>;}
        else if (this.props.subCats.indexOf("학습시터") == -1){
            var a2 = <span className = "typeCover">학습 시터</span>;}

        if (this.props.subCats.indexOf("산후도우미") != -1){
            var a3 = <span className = "typeColoredCover">산후 도우미</span>;}
        else if (this.props.subCats.indexOf("산후도우미") == -1){
            var a3 = <span className = "typeCover">산후 도우미</span>;}
            
        if (this.props.subCats.indexOf("놀이시터") != -1){
            var a4 = <span className = "typeColoredCover">놀이 시터</span>;}
        else if (this.props.subCats.indexOf("놀이시터") == -1){
            var a4 = <span className = "typeCover">놀이 시터</span>;}

        return (
            <Fragment>
                {a}{a1}{a2}{a3}{a4}
            </Fragment>
        );
    }
}

export default catAdong;