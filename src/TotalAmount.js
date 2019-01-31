import React,{Component} from 'react';
import DropdownList from './DropdownList';

class TotalAmount extends Component{
    constructor(props){
        super(props);
        }
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