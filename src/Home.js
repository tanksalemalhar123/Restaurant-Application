import React,{Component} from 'react';
import fire from './config/Fire';
import DropdownList from './DropdownList';
import TotalAmount from './TotalAmount';
import PieChart from './PieChart';

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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-4 col-md-12 col-xs-12" >
                <center>
                <h1 style={{color:'white',paddingTop:'4em',paddingBottom:'0.5em',fontFamily:'Major Mono Display, monospace'}}>
                       Order Details
                   </h1>
                   <hr/>
                   <h3 style={{color:'white'}}>
                       Add Order
                   </h3>
                   
                   <DropdownList/>
                   <br/>
                   <TotalAmount/>
                   <div>
                    <button type="button" style={{}} className="btn btn-danger" > Calculate Total </button>
                </div>
                </center>
                   

                </div>
                <div className="col-lg-4 col-md-3 col-xs-12">
                
                <center>
                <h1 style={{color:'white',marginBottom:'1em',fontFamily:'Major Mono Display, monospace'}}>Welcome!</h1>  
                
                </center> 
                
                </div>

                <div className="col-lg-4 col-md-3 col-xs-12">
                <center>
                <button type="button" style={{marginTop:'2em'}} className="btn btn-danger" onClick={this.logout}> Logout </button>
                <h1 style={{color:'white',marginTop:'2.8em',paddingBottom:'0.5em',fontFamily:'Major Mono Display, monospace'}}>
                       Reports
                   </h1>
                   <hr/>
                   <label style={{color:'#fff',fontFamily:'Major Mono Display, monospace'}}>
                       Sold Products
                   </label>
                <PieChart/>
                </center>
                
                </div>
 
            </div>
            
        )
    }

}

export default Home;