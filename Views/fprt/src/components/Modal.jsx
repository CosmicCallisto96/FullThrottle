import React, { Component } from 'react';
import './styles/Modal.scss';
class Modal extends Component {
    state = {
        cdate:"",
        idate:"",
        today:""
    }
    onDateChange=(e)=>{
        e.preventDefault();
        var a=e.target.value
        var d,m,y;
        y=a.slice(0,4)
        m=a.slice(5,7)
        if(m[0]=="0")
        {
            m=m[1]
        }
        d=a.slice(8,10)
        if(d[0]=="0")
        {
            d=d[1]
        }
        console.log(y,m,d)
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
        this.setState({cdate:months[parseInt(m)-1]+' '+d+' '+y})
        this.setState({idate:e.target.value})
    }
    handleClose=()=>{
        this.props.close();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.cdate!=this.state.cdate)
        {
            var arr=[]
            var ap=this.props.val.activity_periods
            var t=this.state.cdate
            for(var i=0;i<ap.length;i++)
        {
            let c=0;
            for(var j=0;j<t.length;j++)
            {
                if(t[j]==ap[i].start_time[j])
                {
                    c++;
                }
                else
                {
                    break;
                }
            }
            if(c==t.length)
            {
                var l=ap[i].start_time.length
                arr.push("Start-Time"+ap[i].start_time.slice(l-7,l+1)+"   "+"End-Time"+ap[i].start_time.slice(l-7,l+1))
            }
        }
         console.log(arr)
        this.setState({today:arr})

        }
    }
    componentDidMount(){
        var d = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
        var t=months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()
        this.setState({cdate:t})
        console.log(months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear())
        var ap=this.props.val.activity_periods
        var arr=[]
        t='Feb 1 2020'
        console.log(t.length)
        for(var i=0;i<ap.length;i++)
        {
            let c=0;
            for(var j=0;j<t.length;j++)
            {
                if(t[j]==ap[i].start_time[j])
                {
                    c++;
                }
                else
                {
                    break;
                }
            }
            if(c==t.length)
            {
                var l=ap[i].start_time.length
                arr.push("Start-Time"+ap[i].start_time.slice(l-7,l+1)+"   "+"End-Time"+ap[i].start_time.slice(l-7,l+1))

            }
        }
        console.log(arr)
        this.setState({today:arr})
    }
    render() { 
        console.log(this.state)
        return (
            <div className="mod">
                 <div><h1>{this.props.val.real_name}</h1></div>
                 <div><input type="date" name="date" value={this.state.idate} placeholder={this.state.cdate} onChange={this.onDateChange} /></div>
                 {this.state.today.length>0?<div>{this.state.today.map((val)=>
                     <h3>{val}</h3>)}</div>:<h3>No data Found for {this.state.cdate}</h3>}
                     <button onClick={this.handleClose}>Close</button>
                 </div>
       
        );
    }
}
 
export default Modal;