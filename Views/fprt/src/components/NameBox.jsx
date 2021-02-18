import React, { Component } from 'react';
import Modal from './Modal';
import Name from './Name';
import './styles/NameBox.scss';
class NameBox extends Component {
    state = {
        clicked:false,
        ob:""
    }
    handleModal=(obj)=>{
        this.setState({ob:obj})
        this.setState({clicked:!this.state.clicked})
    }
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() { 
        console.log(this.state)
        return (
            
            <div className="nb">
                {this.state.clicked?<Modal val={this.state.ob} close={this.handleClick}></Modal>:<></>}
                {this.props.v.map(val=><Name n={val} cl={this.handleModal} ></Name>)}
            </div>
        );
    }
}
 
export default NameBox;