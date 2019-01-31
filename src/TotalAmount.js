import React,{Component} from 'react';


class TotalAmount extends Component{
   
    render(){
        return(
            <div>
              
                    <label style={{color:'#fff ',fontSize:'1.5em'}}>
                    Total Amount
                    <input className="form-control" type="text" />
                    </label>
              
            </div>
        );
    }
}

export default TotalAmount;