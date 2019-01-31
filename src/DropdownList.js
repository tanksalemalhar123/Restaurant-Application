import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options=["Select Your Food","Coffee","Tea","Cake"];
const quantity=["Select Quantity","1","2","3","4","5"];
const defaultOption = options[0];
const defaultQuantity = quantity[0];
class DropdownList extends React.Component{
    
    
    render(){
        return(
            <div>
                <div>
                 <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                 <br/>
                 <Dropdown style={{width:'2em'}} options={quantity} onChange={this._onSelect} value={defaultQuantity} placeholder="Select an option" />
                </div>
            </div>
        );
    }
}

export default DropdownList;