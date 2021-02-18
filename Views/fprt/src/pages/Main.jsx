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
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get('/api/member');
                this.setState({data:[resp.data]})
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        
        sendGetRequest();
        // axios.get('/api/member').then(res=>this.setState({data:[res.data]})).catch((err)=>console.log(err))
    }
    render() { 
        console.log(this.state.data)
        return (<div className="main">{this.state.data.map((val)=><NameBox v={val}></NameBox>)}</div>);
    }
}
 
export default Main;