import React, { Component } from 'react';
import Child from "./Child";


class RearBar extends Component {
    render() {
        return (
            <div className = "RearBar">
                
                    <button>아동</button>
               
                <button>노인 장애인</button>
                <button>간병인</button>
                <button>반려동물</button>
            </div>

        );
    }
}

export default RearBar;