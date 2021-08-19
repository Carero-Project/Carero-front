import React, { Component, Fragment } from 'react';

class CatHouse extends Component {
    render() {

    if (this.props.subCats.indexOf("음식/주방") != -1){
        var a = <span className = "typeColoredCover">음식/주방</span>;}
    else if (this.props.subCats.indexOf("음식/주방") == -1){
        var a = <span className = "typeCover">음식/주방</span>;}
    
    if (this.props.subCats.indexOf("청소도우미") != -1){
        var a1 = <span className = "typeColoredCover">청소 도우미</span>;}
    else if (this.props.subCats.indexOf("청소도우미") == -1){
        var a1 = <span className = "typeCover">청소 도우미</span>;}


        return (
            <Fragment>
                {a}{a1}
            </Fragment>
        );
    }
}

export default CatHouse;