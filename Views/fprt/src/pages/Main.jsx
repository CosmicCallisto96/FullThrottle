import React, { Component } from 'react';
import NameBox from '../components/NameBox';
import axios from 'axios';
import './Main.scss';
class Main extends Component {
    state = {
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/api/member').then(res=>this.setState({data:[res.data]}))
    }
    render() { 
        console.log(this.state.data)
        return (<div className="main">{this.state.data.map((val)=><NameBox v={val}></NameBox>)}</div>);
    }
}
 
export default Main;