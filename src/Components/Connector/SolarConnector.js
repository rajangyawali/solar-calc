import React, { Component }  from 'react'
import './HorizontalConnector.css'
import { ElectricContext } from '../Electrical/ElectricalContainer'


class SolarConnector extends Component {
    state = {
        message : '',
    }
    statusHandler = (event, props) =>{
        let {status} = this.props
        if (status === true){
            this.setState({
                message:'Connected',
            })
        }else{
            this.setState({
                message:'Not Connected',
            })
        }
    }
    statusDeHandler = (event, props) =>{
            this.setState({message:''})
    }
    render() {
        return (
            <ElectricContext.Consumer>{(context) =>{
                const {solarConnection,solarHasData,toggleSolarConnection} = context
                if (solarConnection){
                    if(solarHasData){
                        return(
                            <div className="horizontal-connector" onClick={toggleSolarConnection} style={{background:'green'}}>
                                <div className="horizontal-circle" style={{background:'green'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="message" style={{color:'green'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="horizontal-connector" onClick={toggleSolarConnection} style={{background:'yellow'}}>
                                <div className="horizontal-circle" style={{background:'yellow'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="message" style={{color:'grey'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }                    
                }
                else{
                    return(
                        <div className="horizontal-connector" onClick={toggleSolarConnection} style={{background:'red'}}>
                            <div className="horizontal-circle" style={{background:'red'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                            <div className="message" style={{color:'red'}}><p>{this.state.message}</p></div>
                        </div>
                    )
                }                
            }}
            </ElectricContext.Consumer>            
        );
    }
}

export default SolarConnector;
