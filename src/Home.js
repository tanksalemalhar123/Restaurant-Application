import React,{Component} from 'react';
import fire from './config/Fire';

class Home extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="col-md-6 col-xs-12" style={{paddingTop:'5%',marginLeft:'40%'}}>
                <div className="col-md-6 col-xs-12" >
                    <h1 style={{color:'white',marginBottom:'1em',fontFamily:'Major Mono Display, monospace'}}>Welcome!</h1>
                        <button className="btn btn-warning" >Add Order</button>
                        <button className="btn btn-info" >View Report</button>
                   
                </div>
                <div className="col-md-6 col-xs-12">
                    <button type="button" style={{width:'12em',display:'inline',float:'right'}} className="btn btn-danger" onClick={this.logout}> Logout </button>
                </div>
            </div>
            
        )
    }

}

export default Home;