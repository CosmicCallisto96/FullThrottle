import React, { Component } from 'react';
import './styles/Name.scss';
class Name extends Component {
    handleClick=(ob)=>{
        this.props.cl(ob)
    }
    render() { 
        return (
       <div className="nm">
            <button onClick={()=>{this.handleClick(this.props.n)}}> {this.props.n.real_name}</button>
        </div>
    );
    }
}
 
export default Name;