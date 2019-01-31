import React,{Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

class PieChart extends Component{
    render(){
        return(
            <div style={{width:'30%'}}>
                   <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage}%`}
                            background
                            backgroundPadding={6}
                            styles={{
                            background: {
                                fill: '#3e98c7',
                            },
                            text: {
                                fill: '#fff',
                            },
                            path: {
                                stroke: '#fff',
                            },
                            trail: { stroke: 'transparent' },
                            }}
                        />
                    
                   <label style={{color:'#fff',fontFamily:'Major Mono Display, monospace',marginTop:'1em'}}>
                       Product Wise
                   </label>

                    <CircularProgressbar
                        percentage={percentage}
                        strokeWidth={50}
                        textForPercentage={null}
                        styles={{
                        path: { strokeLinecap: 'butt' },
                        text: { fill: '#000' },
                        }}
                    />
            </div>
        );
    }
}

export default PieChart;